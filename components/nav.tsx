"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Navigation, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem =
  | { type: "link"; name: string; href: string }
  | { type: "menu"; name: string; items: { name: string; href: string }[] };

const navItems: NavItem[] = [
  { type: "link", name: "Home", href: "#home" },
  { type: "link", name: "About", href: "#about" },
  { type: "link", name: "Products", href: "#products" },
  { type: "link", name: "Team", href: "#team" },
  { type: "link", name: "Contact", href: "#contact" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring" as const, damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      when: "afterChildren" as const,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const logoVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring" as const, damping: 15 },
  },
  collapsed: {
    opacity: 0,
    x: -25,
    rotate: -180,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 15 },
  },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    },
  },
};

export function NavBar() {
  const [isExpanded, setExpanded] = React.useState(true);

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleHashLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.stopPropagation();
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        if (!isExpanded) {
          setExpanded(true);
          // Allow expand animation to begin before scrolling
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 350);
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-neutral-800 shadow-xl h-12",
          !isExpanded && "cursor-pointer justify-center"
        )}
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          backgroundColor: "rgba(10, 10, 10, 0.7)", // Deep black with transparency
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", // Dark shadow for depth
        }}
      >
        <motion.a
          href="#home"
          onClick={(e) => handleHashLink(e, "#home")}
          aria-label="Home"
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-semibold pl-4 pr-2"
        >
          <Navigation className="h-6 w-6 text-white" />
        </motion.a>

        <motion.ul className={cn("flex items-center gap-1 sm:gap-4 pr-4")}>
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.type === "link" ? (
                <motion.a
                  href={item.href}
                  variants={itemVariants}
                  onClick={(e) => handleHashLink(e, item.href)}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors px-2 py-1"
                >
                  {item.name}
                </motion.a>
              ) : (
                <motion.div variants={itemVariants} className="group">
                  <button
                    className="text-sm font-medium text-neutral-300 hover:text-white transition-colors px-2 py-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 hidden group-hover:block">
                    <div className="min-w-[220px] rounded-lg border border-neutral-800 bg-black/90 backdrop-blur shadow-xl p-2">
                      {item.items.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md px-3 py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </li>
          ))}
        </motion.ul>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
