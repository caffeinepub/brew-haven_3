import { Link } from "@tanstack/react-router";
import {
  Coffee,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-espresso text-espresso-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-accent" />
              <span className="font-display text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-espresso-foreground/70 text-sm leading-relaxed">
              A cozy sanctuary for coffee lovers. Every cup crafted with
              passion, every visit a warm memory.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-espresso-foreground/60 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-espresso-foreground/60 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-espresso-foreground/60 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Menu", "/menu"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-espresso-foreground/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-accent">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-espresso-foreground/70">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>7:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>8:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-accent">
              Find Us
            </h4>
            <ul className="space-y-3 text-sm text-espresso-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>123 Brew Street, Coffee District, CA 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span>+1 (555) BREW-HAVEN</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span>hello@brewhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-espresso-foreground/50">
          <span>
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="underline hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
          <span>Brew Haven © {year}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
