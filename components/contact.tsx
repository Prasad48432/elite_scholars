"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/schema/formschema"; // path to your schema
import { supabase } from "@/lib/supabase";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    const { error } = await supabase.from("contacts").insert([data]);

    if (error) {
      setStatus("Something went wrong. Please try again.");
      return;
    }

    setStatus("Message sent successfully!");
    reset();
  };
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 py-20  px-10 lg:px-0">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill in the form below to get in touch.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col gap-2 items-start justify-center py-2">
            <h1 className="text-xl font-bold">Mail</h1>
            <span className="flex gap-2 items-center justify-center">
              <Mail strokeWidth={1} size={20} />
              <a
                className="hover:underline transition-all duration-200 ease-out"
                href="mailto:help@elitescholars.in"
              >
                help@elitescholars.in
              </a>
            </span>
            <span className="flex gap-2 items-center justify-center">
              <Mail strokeWidth={1} size={20} />
              <a
                className="hover:underline transition-all duration-200 ease-out"
                href="mailto:udaykiran@gmail.com"
              >
                udaykiran@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start justify-center py-2">
            <h1 className="text-xl font-bold">Contact</h1>
            <span className="flex gap-2 items-center justify-center">
              <Phone strokeWidth={1} size={20} />
              <a
                className="hover:underline transition-all duration-200 ease-out"
                href="tel:8919075293"
              >
                +91 8919075293
              </a>
            </span>
            <span className="flex gap-2 items-center justify-center">
              <Phone strokeWidth={1} size={20} />
              <a
                className="hover:underline transition-all duration-200 ease-out"
                href="tel:8688734184"
              >
                +91 8688734184
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start justify-center py-2">
            <h1 className="text-xl font-bold mb-2">Keep in touch</h1>
            <span className="flex flex-wrap gap-4 items-center justify-center">
              <a
                target="_blank"
                href="https://www.instagram.com/elitescholars.in/?hl=en"
                className="cursor-pointer"
              >
                <SiInstagram size={20} strokeWidth={1} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/elitescholars.in/?hl=en"
                className="cursor-pointer"
              >
                <SiFacebook size={20} strokeWidth={1} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/elite-scholars-educational-consultants/"
                className="cursor-pointer"
              >
                <SiLinkedin size={20} strokeWidth={1} />
              </a>
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-2/3">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobilenumber">Mobile Number</Label>
              <Input
                id="mobilenumber"
                placeholder="Enter your mobile"
                type="tel"
                {...register("mobilenumber")}
              />
              {errors.mobilenumber && (
                <p className="text-red-500 text-sm">
                  {errors.mobilenumber.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Preferred Country</Label>
              <select
                id="country"
                {...register("country")}
                className="w-full border rounded-md p-2 text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>11
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              className="w-full text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
