"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/context/navbarcontext";
import useWindowSize from "@/hooks/useWindowSize";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  LogIn,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { SiInstagram } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PiRocketLaunch, PiCubeLight } from "react-icons/pi";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const staggerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};
const navItems = [
  { id: 1, label: "Finance", href: "/pricing" },
  { id: 2, label: "Homes", href: "/docs" },
  { id: 3, label: "Community", href: "/blog" },
];

const Navbar = () => {
  const size = useWindowSize();
  const { isNavbarOpen, setIsNavbarOpen } = useNavbar();
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
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
  const [navbarBackground, setNavbarBackground] = useState("");

  useEffect(() => {
    const topDiv = document.getElementById("topdiv");
    const bottomDiv = document.getElementById("bottomdiv");

    bottomDiv?.addEventListener("mouseenter", () => {
      topDiv?.classList.remove("z-40");
      topDiv?.classList.add("z-[42]");
    });

    bottomDiv?.addEventListener("mouseleave", () => {
      topDiv?.classList.remove("z-[42]");
      topDiv?.classList.add("z-40");
    });
  }, []);

  useEffect(() => {
    const navbarBackground = isNavbarOpen ? "#f3f3f3" : "transparent";

    setNavbarBackground(navbarBackground);
  }, [isNavbarOpen]);

  return (
    <>
      <div
        id="topdiv"
        className="sticky top-0 transform z-40 bg-lightprimary-bg dark:bg-primary-bg/90"
      >
        <div className="absolute inset-0 h-full w-full bg-lightprimary-bg/70 dark:bg-primary-bg/90 !opacity-100 transition-opacity"></div>
        <nav
          style={{
            background: navbarBackground,
          }}
          className={`${
            isNavbarOpen && size.width < 1024 ? "border-none" : "border-b"
          } relative z-40 border-brdr backdrop-blur-sm transition-opacity bg-lightprimary-bg dark:bg-primary-bg  border-lightsecondary-border dark:border-secondary-border dark:shadow-lg dark:shadow-primary-bg/80`}
        >
          <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
            <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
              <div id="bottomdiv" className="flex items-center">
                <div className="flex items-center flex-shrink-0">
                  <a
                    className="flex gap-1 items-center justify-center w-auto focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
                    type="button"
                    id="radix-:Rlcna6:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                    href="/"
                  >
                    <Image
                      className="w-[96px] lg:w-[120px] h-[40px] lg:h-[50px] block dark:hidden"
                      src="/elite_logo.png"
                      alt="Header Logo"
                      width={120}
                      height={50}
                      priority
                    />
                  </a>
                </div>
                <nav
                  aria-label="Main"
                  data-orientation="horizontal"
                  dir="ltr"
                  className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16"
                >
                  <div style={{ position: "relative" }}>
                    <ul
                      data-orientation="horizontal"
                      className="group flex flex-1 list-none items-center justify-center"
                      dir="ltr"
                    >
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="hover:text-primary transition-all duration-200 ease-out bg-transparent hover:bg-transparent">
                              Destinations
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 md:w-[400px] lg:w-[500px] bg-card">
                                {countries.map((country, index) => (
                                  <li
                                    key={index}
                                    className="group/country cursor-pointer flex items-center justify-between gap-4 p-3 rounded-md border border-foreground hover:bg-muted transition-colors"
                                  >
                                    {/* Flag and Country Code */}
                                    <div
                                      title={country.name}
                                      className="flex items-center gap-1"
                                    >
                                      <div className="relative w-10 h-6">
                                        <img
                                          alt={`Flag of ${country}`}
                                          src={`https://flagsapi.com/${country.code}/flat/64.png`}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                      <span className="font-medium line-clamp-1">
                                        {country.name}
                                      </span>
                                    </div>

                                    <span className="group-hover/country:translate-x-2 opacity-50 group-hover/country:opacity-100 transition-all text-foreground">
                                      <ChevronRight
                                        strokeWidth={1}
                                        className="text-foreground"
                                      />
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="hover:text-primary transition-all duration-200 ease-out bg-transparent">
                              Test Prep
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="flex w-[400px] gap-4 p-4 md:w-[500px] lg:w-[600px] items-center justify-between bg-card">
                                {/* Left: Exam Logos */}
                                <ul className="grid grid-cols-3 gap-4 w-2/3 place-items-center">
                                  {exams.map((exam, index) => (
                                    <li
                                      key={index}
                                      className="relative  w-20 h-12 flex items-center justify-center cursor-pointer"
                                    >
                                      <a target="_blank" href={exam.link}>
                                        <img
                                          alt={`Logo of ${exam.name}`}
                                          src={`/${exam.code}.png`}
                                        />
                                      </a>
                                    </li>
                                  ))}
                                </ul>

                                {/* Separator */}
                                <div className="h-32 w-px bg-border" />

                                {/* Right: Text + QR */}
                                <div className="w-1/3 flex flex-col items-center text-center">
                                  <p className="text-xl font-semibold mb-2">
                                    Start Preparing
                                  </p>
                                  <div className="relative w-20 h-20">
                                    <Image
                                      alt="QR Code"
                                      src="/qr.png"
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                </div>
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Finance
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Homes
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                Community
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </ul>
                  </div>
                  <div className="absolute left-0 top-full flex justify-center" />
                </nav>
              </div>
              <div className="flex items-center gap-2 select-none">
                {/* {loading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin text-lightprimary-text dark:text-primary-text" />
            ) :  */}

                <div className="flex items-center gap-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div
                        data-size="tiny"
                        className="relative hover:bg-muted justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 border text-foreground  text-sm px-2.5 py-1.5 hidden lg:flex"
                      >
                        <Phone strokeWidth={1} size={20} />
                        <span className="truncate">Contact</span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <a
                            target="_blank"
                            href="https://www.instagram.com/elitescholars.in/?hl=en"
                            className="flex gap-2 items-center"
                          >
                            <SiInstagram />
                            <h4 className="text-sm font-semibold">
                              @elitescholars.in
                            </h4>
                          </a>
                          <a
                            href="tel:8919075293"
                            className="flex gap-2 items-center"
                          >
                            <FiPhone />
                            <h4 className="text-sm font-semibold">
                              +91 8919075293
                            </h4>
                          </a>
                          <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-sm text-foreground">
                              since 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="relative hover:bg-muted justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 border text-foreground text-sm px-2.5 py-1.5 hidden lg:flex">
                    <Search strokeWidth={1} size={20} />
                    <span className="truncate">Search</span>
                  </p>
                </div>
                <motion.div
                  className="block lg:hidden cursor-pointer text-lightprimary-text dark:text-primary-text"
                  onClick={() => {
                    setIsNavbarOpen(!isNavbarOpen);
                    setDropdown1Open(false);
                    setDropdown2Open(false);
                  }}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: isNavbarOpen ? 0.7 : 1 }}
                  transition={{ duration: 1 }}
                >
                  {isNavbarOpen ? (
                    <X className="h-6 w-6" /> // Cross icon
                  ) : (
                    <Menu className="h-6 w-6" /> // Menu icon
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isNavbarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              zIndex: isNavbarOpen ? 42 : 39,
            }}
            className="max-h-[91vh] no_scrollbar block w-full fixed top-16 left-0 lg:hidden bg-background supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-4 pb-4 px-4"
          >
            {/* Navbar Links */}
            <motion.nav
              className="flex flex-col space-y-3 w-full"
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="border-b border-lightsecondary-border/50 dark:border-secondary-border/50 transform-none w-full"
                custom={0}
                variants={staggerVariants}
              >
                <button
                  onClick={() => setDropdown1Open(!isDropdown1Open)}
                  className="w-full py-2 pl-3 pr-4 text-base flex items-center justify-between font-medium text-lightprimary-text/80 dark:text-primary-text/80 hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                >
                  Destinations
                  <motion.span
                    animate={{ rotate: isDropdown1Open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
                {isDropdown1Open && (
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="grid grid-cols-2 gap-4 p-6 md:w-[400px] lg:w-[500px] bg-background">
                      {countries.map((country, index) => (
                        <li
                          key={index}
                          title={country.name}
                          className="group cursor-pointer flex items-center justify-between gap-4 p-3 rounded-md border border-primary hover:bg-muted transition-colors"
                        >
                          {/* Flag and Country Code */}
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-6">
                              <img
                                alt={`Flag of ${country}`}
                                src={`https://flagsapi.com/${country.code}/flat/64.png`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="font-medium line-clamp-1">
                              {country.name}
                            </span>
                          </div>

                          <span className="opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-opacity text-muted-foreground">
                            <ChevronRight
                              strokeWidth={1}
                              className="text-primary"
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                className="border-b border-secondary-border/50 transform-none w-full"
                custom={1}
                variants={staggerVariants}
              >
                <button
                  onClick={() => setDropdown2Open(!isDropdown2Open)}
                  className="w-full py-2 pl-3 pr-4 text-base flex items-center justify-between font-medium text-lightprimary-text/80 dark:text-primary-text/80 hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                >
                  Test Prep
                  <motion.span
                    animate={{ rotate: isDropdown2Open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
                {isDropdown2Open && (
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-start justify-start gap-3 w-full py-4 px-2">
                      <ul className="grid grid-cols-3 gap-4 w-full place-items-center">
                        {exams.map((exam, index) => (
                          <li
                            key={index}
                            className="relative  w-20 h-12 flex items-center justify-center cursor-pointer"
                          >
                            <a target="_blank" href={exam.link}>
                              <img
                                alt={`Logo of ${exam.name}`}
                                src={`/${exam.code}.png`}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Separator */}
                      <div className="h-px w-full bg-border" />

                      {/* Right: Text + QR */}
                      <div className="w-full flex flex-col items-center text-center">
                        <p className="text-xl font-semibold mb-2">
                          Start Preparing
                        </p>
                        <div className="relative w-20 h-20">
                          <Image
                            alt="QR Code"
                            src="/qr.png"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Add more options as needed */}
                  </motion.div>
                )}
              </motion.div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`border-b border-secondary-border/50 transform-none`}
                  custom={2 + index}
                  variants={staggerVariants}
                >
                  <a
                    className="block py-2 pl-3 pr-4 text-base font-medium text-lightprimary-text/80 dark:text-primary-text/80 hover:bg-surface-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:rounded"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div custom={5} variants={staggerVariants}>
                <a href="tel:8919075293">
                  <Button className="w-full mt-5" variant={"outline"}>
                    <Phone strokeWidth={1} size={20} />
                    <span className="truncate">Contact</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div custom={6} variants={staggerVariants}>
                <Button className="w-full mt-2" variant={"outline"}>
                  <Search strokeWidth={1} size={20} />
                  <span className="truncate">Search</span>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
