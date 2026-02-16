import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Core Functions", href: "#core-functions" },
  { label: "Projects & Clients", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
];

const services = [
  "HVAC Solutions",
  "Lighting Experts",
  "ieComfort CloudBox",
  "Utility Auction Platform",
  "Energy Improvement Fund",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo.jpg"
                alt="ieComfort"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Innovative building solutions aligned with your mission. Delivering energy
              savings that were thought to be impossible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5 font-[family-name:var(--font-header)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5 font-[family-name:var(--font-header)]">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5 font-[family-name:var(--font-header)]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:info@iecomfort.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@iecomfort.com
                </a>
              </li>
              <li>Serving the Northeast US</li>
            </ul>
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4 font-[family-name:var(--font-header)]">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ieComfort, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
