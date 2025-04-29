import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IE", name: "Ireland" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "NZ", name: "New Zealand" },
  { code: "AE", name: "United Arab Emirates" },
];

const exams = [
  {
    code: "ielts",
    name: "IELTS",
    link: "https://www.ielts.org/",
  },
  {
    code: "gmat",
    name: "GMAT",
    link: "https://www.mba.com/exams/gmat",
  },
  {
    code: "gre",
    name: "GRE",
    link: "https://www.ets.org/gre",
  },
  {
    code: "pte",
    name: "PTE Academic",
    link: "https://www.pearsonpte.com/",
  },
  {
    code: "sat",
    name: "SAT",
    link: "https://satsuite.collegeboard.org/sat",
  },
  {
    code: "toefl",
    name: "TOEFL",
    link: "https://www.ets.org/toefl",
  },
];

const company = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Work with Us",
    link: "/careers",
  },
  {
    title: "Success Stories",
    link: "/success-stories",
  },
  {
    title: "Experience Centres",
    link: "/experience-centres",
  },
  {
    title: "For Universities",
    link: "/for-universities",
  },
  {
    title: "For Study Abroad Agents",
    link: "/for-agents",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pt-[120px] max-w-7xl mx-auto px-10 lg:px-0">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    className="w-[96px] lg:w-[120px] h-[40px] lg:h-[50px] block dark:hidden"
                    src="/elite_logo.png"
                    alt="Header Logo"
                    width={120}
                    height={50}
                    priority
                  />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  © 2025 EliteScholars. Guiding students and professionals
                  towards global education and career success.
                </p>
                <a
                  href="tel:8919075293"
                  className="flex items-center text-sm font-medium text-dark dark:text-white"
                >
                  <span className="mr-3 text-primary">
                    <Phone size={20} />
                  </span>
                  <span>+91 8919075293</span>
                </a>
                <a
                  href="tel:8688734184"
                  className="flex items-center text-sm font-medium text-dark dark:text-white mt-2"
                >
                  <span className="mr-3 text-primary">
                    <Phone size={20} />
                  </span>
                  <span>+91 8688734184</span>
                </a>
              </div>
            </div>

            <LinkGroup header="Study Abroad">
              {countries.map((country, index) => (
                <NavLink
                  key={index}
                  link="/#"
                  label={`Study in ${country.name}`}
                />
              ))}
            </LinkGroup>
            <LinkGroup header="Test Prep">
              {exams.map((exam, index) => (
                <NavLink
                  key={index}
                  link={exam.link}
                  label={`Prep for ${exam.name}`}
                />
              ))}
            </LinkGroup>
            <LinkGroup header="Company">
              {company.map((item, index) => (
                <NavLink key={index} link={item.link} label={item.title} />
              ))}
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/elitescholars.in/?hl=en"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/elitescholars.in/?hl=en"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/elitescholars.in/?hl=en"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/elite-scholars-educational-consultants/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2025 EliteScholars
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
      <div className="relative overflow-hidden h-[360px]">
        <img
          src="https://images.leverageedu.com/homepage/flight.png"
          className="absolute top-[30%] left-[40%] h-[88px] z-10"
        />
        <div className="footer_bg"></div>
      </div>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }: { children: any; header: any }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }: { link: string; label: any }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-sm leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
