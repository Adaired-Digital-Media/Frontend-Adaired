type Data = {
  formId: string;
  Name?: string;
  Email?: string;
  Phone?: string;
  Interest?: string;
  Budget?: string;
  Message?: string;
  terms?: boolean;
};

export async function formSubmission(data: Data) {
  const apiEndpoint = "/api/formMailer";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Error submitting form:", err);
    throw new Error("An error occurred while submitting the form");
    // Optionally, display an error message to the user
  }
}
