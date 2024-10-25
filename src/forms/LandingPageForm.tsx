"use client";
import { cn } from "@/lib/utils";

// Validators and Form Components Import
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Form Fields Import
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-phone-input-2/lib/style.css";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Toploader Navigation
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";

// Recaptcha Imports
import { useReCaptcha } from "next-recaptcha-v3";
import { toast } from "@/components/ui/use-toast";
import { BHWServices } from "@/constants/LandingPage";

const LandingPageForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { executeRecaptcha } = useReCaptcha();
  const services = BHWServices?.map((item) => item.name);

  const formSchema = z.object({
    gRecaptchaToken: z.string(),
    formId: z.string(),
    pageUrl: z.string(),
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone: z.string().min(5, { message: "Phone number is required" }),
    service: z.string().min(1, { message: "Please select a service" }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gRecaptchaToken: "",
      formId: "Landing Page Form",
      pageUrl: pathname,
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const token = await executeRecaptcha("contact_form_landing_page");
    if (token) {
      data.gRecaptchaToken = token;
      form.reset();
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <Form {...form}>
      <form className={cn(``)} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn(`space-y-[11px]`)}>
          <FormField
            control={form.control}
            name="formId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} placeholder="formId" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    className={cn(
                      `bg-[#F9F9F9] border-0 text-base text-[#828282]`
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    className={cn(
                      `bg-[#F9F9F9] border-0 text-base text-[#828282]`
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <PhoneInput
                    value={field.value}
                    country={"us"}
                    inputProps={{
                      name: "phone",
                    }}
                    inputStyle={{
                      width: "100%",
                      fontSize: "1rem",
                      backgroundColor: "#f9f9f9",
                      borderWidth: "0px",
                      color: "#000",
                    }}
                    buttonStyle={{
                      borderWidth: "0px",
                    }}
                    enableSearch
                    onChange={(value, country: CountryData | {}) => {
                      if ("dialCode" in country) {
                        const countryWithDialCode = country as CountryData;
                        const formattedValue = `+${
                          countryWithDialCode.dialCode
                        } ${value.slice(countryWithDialCode.dialCode.length)}`;
                        field.onChange(formattedValue);
                      } else {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      aria-label="select any one service"
                      className={cn(
                        `form-select focus:ring-offset-0 focus:ring-0 bg-[#F9F9F9] border-0 text-base text-[#828282]`
                      )}
                    >
                      <SelectValue placeholder="Services" />
                    </SelectTrigger>
                    <SelectContent>
                      {services?.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Message"
                    className={cn(
                      `bg-[#F9F9F9] border-0 text-base text-[#828282] focus-visible:ring-offset-0 focus-visible:ring-0`
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className={cn(
            `mt-10 w-full rounded-full bg-[#F39019] font-poppins font-medium text-lg`
          )}
        >
          Request A Quote
        </Button>
      </form>
    </Form>
  );
};

export default LandingPageForm;
