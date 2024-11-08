"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-background border-t text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold  tracking-wide",
                font.className
              )}
            >
              About Us
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are dedicated to providing exceptional services and innovative
              solutions to meet your needs. Our commitment to excellence drives
              everything we do.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold tracking-wide",
                font.className
              )}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={cn(
                        "text-muted-foreground hover:text-primary transition-colors text-sm"
                      )}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold tracking-wide",
                font.className
              )}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 100</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@example.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold tracking-wide",
                font.className
              )}
            >
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
