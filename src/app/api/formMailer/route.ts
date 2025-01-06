import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";
// import HomepageForm from "../emailTemplates/HomepageForm";
// import GetintouchForm from "../emailTemplates/GetintouchForm";
// import ContactpageForm from "../emailTemplates/ContactpageForm";
// import NewsletterForm from "../emailTemplates/NewsletterForm";

// Load and validate environment variables
const config = {
  emailHost: process.env.EMAIL_HOST,
  senderEmail: process.env.SENDER_EMAIL,
  senderPassword: process.env.SENDER_PASSWORD,
  senderName: process.env.SENDER_NAME || '"Adaired Digital" <info@adaired.com>',
  adminEmails: [process.env.SUPER_ADMIN_EMAIL || ""],
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  zohoAccessToken: process.env.ZOHO_ACCESS_TOKEN || "",
  zohoApiUrl: process.env.ZOHO_API_URI || "",
  zohoClientId: process.env.ZOHO_CLIENT_ID || "",
  zohoClientSecret: process.env.ZOHO_CLIENT_SECRET || "",
  zohoRefreshToken: process.env.ZOHO_REFRESH_TOKEN || "",
};

// Check and refresh Zoho access token
async function checkAndRefreshZohoAccessToken(): Promise<string> {
  try {
    // Make a test API call to check if the access token is valid
    const response = await fetch(`${config.zohoApiUrl}/Leads`, {
      method: "GET",
      headers: {
        Authorization: `Zoho-oauthtoken ${config.zohoAccessToken}`,
      },
    });

    if (response.ok) {
      return config.zohoAccessToken;
    } else {
      // Token is expired, refresh it
      const refreshResponse = await fetch(
        "https://accounts.zoho.com/oauth/v2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: config.zohoClientId,
            client_secret: config.zohoClientSecret,
            refresh_token: config.zohoRefreshToken,
            grant_type: "refresh_token",
          }),
        }
      );

      if (!refreshResponse.ok) {
        throw new Error("Failed to refresh Zoho Access Token");
      }

      const refreshData = await refreshResponse.json();
      console.log("Refreshed Zoho access token -> ", refreshData);
      const newAccessToken = refreshData.access_token;
      config.zohoAccessToken = newAccessToken;

      return newAccessToken;
    }
  } catch (error: any) {
    throw new Error("Failed to refresh Zoho access token", error);
  }
}

// Send data to Zoho CRM
async function sendToZohoCRM(data: any): Promise<void> {
  try {
    const validAccessToken = await checkAndRefreshZohoAccessToken();
    console.log("Valid access token -> ", validAccessToken);
    const response = await fetch(config.zohoApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${validAccessToken}`,
      },
      body: JSON.stringify({ data: [data] }),
    });

    // console.log("Zoho CRM response -> ", response);

    if (!response.ok) {
      throw new Error(`Zoho CRM Error: ${await response.text()}`);
    }
  } catch (error: any) {
    throw new Error("Failed to send data to Zoho CRM", error);
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  // Verify the reCAPTCHA token
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecretKey}&response=${payload.gRecaptchaToken}`
    ).then((res) => res.json());

    if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "reCAPTCHA verification error", err },
      { status: 500 }
    );
  }

  // Send data to Zoho CRM
  const zohoData = {
    Company: "Adaired Digital",
    First_Name: payload?.Name
      ? payload?.Name?.split(" ")[0]
      : payload?.Email?.split("@")[0],
    Last_Name: payload?.Name
      ? payload?.Name?.split(" ").slice(1).join(" ")
      : "N/A",
    Email: payload?.Email,
    Phone: payload?.Phone,
    Description: payload?.Message || "No message provided",
    Lead_Source: "Website Contact Form",
  };

  await sendToZohoCRM(zohoData);

  // const transporter = nodemailer.createTransport({
  //   host: config.emailHost,
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: config.senderEmail,
  //     pass: config.senderPassword,
  //   },
  // });

  // async function sendMail(mailOptions: Mail.Options): Promise<string> {
  //   try {
  //     await transporter.sendMail(mailOptions);
  //     return "Email sent";
  //   } catch (err: unknown) {
  //     if (typeof err === "string") {
  //       throw new Error(err);
  //     } else if (err instanceof Error) {
  //       throw err;
  //     } else {
  //       throw new Error("An unknown error occurred");
  //     }
  //   }
  // }

  // const formTemplates: { [key: string]: { html: string } } = {
  //   "Homepage Form": {
  //     html: HomepageForm({
  //       Name: payload.Name,
  //       Email: payload.Email,
  //       Phone: payload.Phone,
  //       Interest: payload.Interest,
  //       Budget: payload.Budget,
  //       Message: payload.Message,
  //     }),
  //   },
  //   "Contact page Form": {
  //     html: ContactpageForm({
  //       Name: payload.Name,
  //       Email: payload.Email,
  //       Phone: payload.Phone,
  //       Message: payload.Message,
  //     }),
  //   },
  //   "Get in Touch Form": {
  //     html: GetintouchForm({
  //       Name: payload.Name,
  //       Email: payload.Email,
  //       Message: payload.Message,
  //     }),
  //   },
  //   "Newsletter Form": {
  //     html: NewsletterForm({
  //       Email: payload.Email,
  //     }),
  //   },
  // };

  // const template = formTemplates[payload.formId];
  // if (!template) {
  //   return NextResponse.json(
  //     { error: "Invalid request type" },
  //     { status: 400 }
  //   );
  // }

  // Prepare mail options

  // const mailOptions: Mail.Options = {
  //   from: config.senderName,
  //   to: config.adminEmails,
  //   subject: `${payload.formId
  //     .replace(/Form$/, "")
  //     .replace(/([A-Z])/g, " $1")
  //     .trim()} Form Submission`,
  //   html: template.html,
  // };

  // // Send email to admins
  // try {
  //   await sendMail(mailOptions);
  //   return NextResponse.json({
  //     sendMailSuccess: true,
  //     message: "Email sent successfully",
  //   });
  // } catch (err) {
  //   return NextResponse.json(
  //     { sendMailSuccess: false, error: "Failed to send email", Error: err },
  //     { status: 500 }
  //   );
  // }
}
