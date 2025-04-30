"use client";
import React, { JSX } from "react";
import {
  FiAirplay,
  FiAward,
  FiDollarSign,
  FiGlobe,
  FiHome,
  FiMapPin,
} from "react-icons/fi";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { LuPlane } from "react-icons/lu";

export const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="mx-auto max-w-7xl flex flex-col gap-4 px-10 lg:px-0"
    >
      <motion.div
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="space-y-2 mb-5"
      >
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore the wide range of services we offer to help you achieve your
          goals. Let us guide you through the process.
        </p>
      </motion.div>
      <ServicesSection />
    </motion.div>
  );
};

const ServiceBlock = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`col-span-3 lg:col-span-1 ${className}`}
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-lg min-h-52 border">
        <div className="text-4xl mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-sm text-zinc-500 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 w-full">
    <ServiceBlock
      title="University Application Assistance"
      description="Get expert help with your university applications, ensuring that your documents and applications are top-notch."
      icon={<FiAward />}
      className="bg-blue-100"
    />
    <ServiceBlock
      title="Visa Consultation"
      description="We offer comprehensive visa consultation services to ensure you have the proper documentation for your abroad studies."
      icon={<FiMapPin />}
      className="bg-green-100"
    />
    <ServiceBlock
      title="Scholarship Guidance"
      description="Our team helps you identify and apply for scholarships that can make your abroad studies more affordable."
      icon={<FiDollarSign />}
      className="bg-yellow-100"
    />
    <ServiceBlock
      title="Accommodation Assistance"
      description="We assist you in finding accommodation near your university, whether on-campus or off-campus."
      icon={<FiHome />}
      className="bg-red-100"
    />
    <ServiceBlock
      title="Travel Arrangements"
      description="We help you with your travel plans, from booking flights to arranging transport when you arrive at your destination."
      icon={<LuPlane />}
      className="bg-purple-100"
    />
    <ServiceBlock
      title="Cultural Orientation"
      description="Get familiar with the culture of your destination country to ease your transition and make the most out of your study abroad experience."
      icon={<FiGlobe />}
      className="bg-teal-100"
    />
  </div>
);
