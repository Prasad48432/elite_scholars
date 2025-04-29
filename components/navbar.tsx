"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/context/navbarcontext";
import useWindowSize from "@/hooks/useWindowSize";
import { LogIn, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const size = useWindowSize();
  const { isNavbarOpen, setIsNavbarOpen } = useNavbar();
  const countries = ['US','GB', 'CA', 'AU','IE', 'DE', 'FR', 'IT', 'NZ'];

  return (
    <div
      id="topdiv"
      className="sticky top-0 transform z-40 bg-lightprimary-bg dark:bg-primary-bg/90"
    >
      <div className="absolute inset-0 h-full w-full bg-lightprimary-bg/70 dark:bg-primary-bg/90 !opacity-100 transition-opacity"></div>
      <nav
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
                    className="w-[120px] h-[50px] block dark:hidden"
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
                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                    dir="ltr"
                  >
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Destinations
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-3 bg-foreground">
                                {countries.map((country,index) => (
                                    <img key={index} src={`https://flagsapi.com/${country}/flat/64.png`} />
                                ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Components
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {components.map((component) => (
                                <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                >
                                  {component.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Documentation
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <li className="text-sm font-medium">
                      <a
                        className="group/menu-item flex items-center text-sm hover:text-lightaccent-selection dark:hover:text-accent-text select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent-text-lighter group-hover:bg-transparent text-accent-text focus-visible:text-accent-text"
                        data-radix-collection-item=""
                        href="#pricing"
                      >
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-1">
                            <p className="leading-snug text-primary group-hover/menu-item:text-lightaccent-selection dark:group-hover/menu-item:text-accent-text">
                              Pricing
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="text-sm font-medium">
                      <a
                        className="group/menu-item flex items-center text-sm hover:text-lightaccent-selection dark:hover:text-accent-text  select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-accent-text-lighter group-hover:bg-transparent text-accent-text focus-visible:text-accent-text"
                        data-radix-collection-item=""
                        href="/docs"
                      >
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-1">
                            <p className="leading-snug text-lightprimary-text dark:text-primary-text group-hover/menu-item:text-lightaccent-selection dark:group-hover/menu-item:text-accent-text">
                              Docs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="text-sm font-medium">
                      <a
                        className="group/menu-item flex items-center text-sm hover:text-lightaccent-selection dark:hover:text-accent-text select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter group-hover:bg-transparent text-accent-text focus-visible:text-accent-text"
                        data-radix-collection-item=""
                        href="/blog"
                      >
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-1">
                            <p className="leading-snug text-lightprimary-text dark:text-primary-text group-hover/menu-item:text-lightaccent-selection dark:group-hover/menu-item:text-accent-text">
                              Blogs
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
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
                <a
                  data-size="tiny"
                  type="button"
                  className="relative justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-lightprimary-text dark:text-primary-text bg-lightaccent-bg dark:bg-accent-bg hover:bg-lightaccent-selection dark:hover:bg-accent-selection border-lightaccent-border dark:border-accent-border hover:border-lightaccent-strongerborder dark:hover:hover:border-accent-strongerborder focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px] hidden lg:block"
                  href="/dashboard/home"
                >
                  <span className="truncate">Dashboard</span>
                </a>
                <p className="relative justify-center cursor-pointer items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-lightprimary-text dark:text-primary-text bg-lightdanger-bg dark:bg-danger-bg hover:bg-lightdanger-selection dark:hover:bg-danger-selection border-lightdanger-border dark:border-danger-border hover:border-lightdanger-strongerborder dark:hover:border-danger-strongerborder focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs px-2.5 py-1 h-[26px] hidden lg:block">
                  <span className="truncate">Logout</span>
                </p>
              </div>
              <motion.div
                className="block lg:hidden cursor-pointer text-lightprimary-text dark:text-primary-text"
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
  )
})
ListItem.displayName = "ListItem"

export default Navbar;
