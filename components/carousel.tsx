"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    bgGradient: "bg-gradient-to-br from-pink-100 via-pink-300 to-pink-500",
    feedback:
      "Elite Scholars made my dream university a reality. Incredibly helpful!",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage3.png",
    avatar: "https://randomuser.me/api/portraits/men/69.jpg",
    university: "Technical University of Munich",
    country: "Germany",
    countryCode: "DE",
    name: "Varun",
  },
  {
    bgGradient: "bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500",
    feedback:
      "Amazing support from start to finish. Highly recommend their service!",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage4.png",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    university: "University of Toronto",
    country: "Canada",
    countryCode: "CA",
    name: "Aarav",
  },
  {
    bgGradient:
      "bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500",
    feedback: "Got into my top UK university thanks to their expert guidance.",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage2.png",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    university: "University of Edinburgh",
    country: "United Kingdom",
    countryCode: "GB",
    name: "Saanvi",
  },
  {
    bgGradient: "bg-gradient-to-br from-green-100 via-green-300 to-green-500",
    feedback:
      "Clear steps, fast responses, and real results. Brilliant consultancy.",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage2.png",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    university: "University of Melbourne",
    country: "Australia",
    countryCode: "AU",
    name: "Aarav",
  },
  {
    bgGradient:
      "bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500",
    feedback: "Their knowledge of international admissions is unmatched.",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage3.png",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    university: "Sorbonne University",
    country: "France",
    countryCode: "FR",
    name: "Rocky",
  },
  {
    bgGradient: "bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500",
    feedback: "From IELTS prep to visa, they handled everything seamlessly.",
    image:
      "https://publicassets.leverageedu.com/homepage/success-stories-new/testiEngImage4.png",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    university: "University of Auckland",
    country: "New Zealand",
    countryCode: "NZ",
    name: "Kumar",
  },
];

export function HomeCarousel() {
  return (
    <div className="flex flex-col items-center gap-3 px-10 lg:px-0 py-20 overflow-x-visible lg:ml-32">
      <span className="flex flex-col items-start justify-center w-full mb-3">
        <h1 className="font-semibold text-foreground text-lg lg:text-xl">
          Success Stories
        </h1>
        <p className="bricolage text-2xl lg:text-3xl font-bold">
          Turning{" "}
          <span className="underline underline-offset-1">Ambitions</span> into{" "}
          <span className="text-primary">Achievements</span>
        </p>
      </span>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full overflow-visible"
      >
        <CarouselContent className="overflow-visible -ml-4">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[66.666%] sm:basis-[80%] md:basis-[50%] lg:basis-[28.5%]"
              // sm: 1.25 cards, md: 2 cards, lg: ~3.5 cards
            >
              <Card>
                <CardContent
                  className={`relative flex flex-col gap-3 items-center justify-center h-[200px] lg:h-[300px] rounded-xl p-0`}
                >
                  <img
                    className="object-cover rounded-t-xl h-[70%] w-full"
                    src={item.image}
                  />
                  <div className="flex items-center justify-start gap-2 h-[30%] w-full px-4 bg-white/90 rounded-b-xl">
                    <img
                      src={item.avatar}
                      alt="Student"
                      className="rounded-full w-6 lg:w-12 h-6 lg:h-12"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center text-foreground">
                      <span className="flex text-xs lg:text-base">
                        <p className="font-semibold">{item.name}</p>, studying
                        at
                      </span>
                      <span className="text-xs lg:text-base line-clamp-1">{item.university}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
