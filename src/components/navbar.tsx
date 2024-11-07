import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider text-white hover:text-primary transition-colors"
            >
              ASTRA FREE
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-white hover:text-[hsl(var(--primary))]",
                    "transition-colors duration-200"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
