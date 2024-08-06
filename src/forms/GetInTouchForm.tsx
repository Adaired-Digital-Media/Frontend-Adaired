"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { formSubmission } from "@/lib/send-email";
import { useReCaptcha } from "next-recaptcha-v3";
import { useRouter } from "next/navigation";

function GetInTouchForm() {
  const router = useRouter();
  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const schema = z.object({
    gRecaptchaToken: z.string(),
    formId: z.string(),
    Name: z.string().min(1, { message: "Name is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    Message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      gRecaptchaToken: "",
      formId: "Get in Touch Form",
      Name: "",
      Email: "",
      Message: "",
    },
  });

  // const onSubmit = async (values: z.infer<typeof schema>) => {
  //   const token = await executeRecaptcha("get_in_touch_form");
  //   if (token) {
  //     values.gRecaptchaToken = token;
  //     formSubmission(values);
  //     toast({
  //       variant: "default",
  //       description: "Your message has been sent successfully",
  //     });
  //     form.reset();
  //   }
  // };

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const token = await executeRecaptcha("get_in_touch_form");
    if (token) {
      values.gRecaptchaToken = token;
      form.reset();
      router.push("/thankyou");

      try {
        const response = await formSubmission(values);
        if (!response.sendMailSuccess) {
          router.back();
          toast({
            variant: "destructive",
            description: "Failed to send email",
          });
        }
      } catch (error) {
        router.back();
      }
    }
  };

  return (
    <div className="border p-5 rounded-lg">
      <h2 className="text-[1.688rem] md:text-4xl mb-4 inline-block">
        Get In Touch
        <div className="h-0.5 w-3/4 bg-[#BC1D8D]" />
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="formId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    rows={5}
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            title="View More Information"
            className="bg-white text-black w-full border-[#FB9100] pl-0 pr-0 hover:pl-0 hover:pr-0 justify-center"
            textClassName="text-center"
            svgClassName="bg-[#000000] "
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
}

export default GetInTouchForm;
