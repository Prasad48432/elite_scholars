import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  mobilenumber: z.string().min(10, "Mobile number is too short"),
  message: z.string().min(5, "Message is too short"),
  country: z.enum(["USA", "UK", "Germany", "Canada", "Australia", "Other"], {
    required_error: "Country is required",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
