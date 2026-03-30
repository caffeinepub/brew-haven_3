import { Link, useRouterState } from "@tanstack/react-router";
import { Coffee, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-espresso shadow-lg" : "bg-espresso/95"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <Coffee className="w-6 h-6 text-accent" />
          <span className="font-display text-xl font-bold text-espresso-foreground tracking-wide">
            Brew Haven
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-espresso-foreground/80"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/register"
              className="bg-accent text-accent-foreground font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              data-ocid="nav.primary_button"
            >
              Join Us
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-espresso-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-espresso overflow-hidden border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block font-sans text-base font-medium transition-colors duration-200 hover:text-accent ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-espresso-foreground/80"
                    }`}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/register"
                  className="inline-block bg-accent text-accent-foreground font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
                  data-ocid="nav.primary_button"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
