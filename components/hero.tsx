import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-12 lg:py-20 pb-20 lg:pb-24">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="bricolage font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span className="relative">Study abroad with</span>
          <span className="relative">expert guidance,</span>
          <span className="relative whitespace-nowrap">
            <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1" />
            <span className="relative text-neutral">
              not{" "}
              <span className="text-destructive line-through">confusion</span>
            </span>
          </span>
        </h1>
        <p className="md:text-lg text-base opacity-80 leading-relaxed">
          From choosing the right university to acing your applications — we
          simplify every step of your study abroad journey.{" "}
          <span className="hidden lg:inline">
            Get personalized support, visa guidance, and real-time updates, all
            in one place.
          </span>
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-center align-center gap-3">
            <div className="-space-x-5 avatar-group items-center justify-center lg:justify-start">
              <div className="avatar w-12 h-12">
                <img
                  alt="Srinath"
                  width={400}
                  height={400}
                  src="/headshots/srinadh.png"
                  className="object-cover"
                />
              </div>
              <div className="avatar w-12 h-12">
                <img
                  alt="Ramya"
                  width={400}
                  height={400}
                  src="/headshots/ramya.png"
                  className="object-cover"
                />
              </div>
              <div className="avatar w-12 h-12">
                <img
                  alt="Kushal"
                  width={400}
                  height={400}
                  src="/headshots/ksuhal.png"
                  className="object-cover"
                />
              </div>
              <div className="avatar w-12 h-12">
                <img
                  alt="Nikhil"
                  width={400}
                  height={400}
                  src="/headshots/nikhil.png"
                  className="object-cover"
                />
              </div>
              <div className="avatar w-12 h-12">
                <img
                  alt="Varun"
                  width={400}
                  height={400}
                  src="/headshots/varun.png"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-1">
              <div className="rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-base text-base-content/80">
                <span className="font-semibold text-base-content">1000+</span>{" "}
                {/* */}application
                {/* */}s{/* */} processed
              </div>
            </div>
          </div>
          <Button className="rounded-full font-semibold p-6 text-white">
            Get Started
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="relative max-md:-m-4 lg:w-full">
        <img
          alt="Uday Head"
          width={1080}
          height={1080}
          className="w-full max-w-xl ml-auto"
          src="/uday.png"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl leading-[35px] bricolage font-bold text-primary px-4 py-1 rounded">
            Uday
          </span>
          <span className="text-3xl leading-[10px] bricolage font-bold text-froeground  px-4 py-1 rounded">
            Marketing Head
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
