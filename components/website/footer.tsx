import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Gurkha Lounge Logo"
                  width={180}
                  height={60}
                  className="invert"
                />
              </Link>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Authentic Nepalese and Indian cuisine in the heart of Doncaster.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Contact Us
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-400">199 Carr House Road</li>
              <li className="text-gray-400">Doncaster, DN4 5DP</li>
              <li className="text-gray-400">01302 366355</li>
            </ul>
          </div>

          {/* Opening Hours Summary */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-400">
                Tuesday - Saturday: 17:00 - 22:20
              </li>
              <li className="text-gray-400">Sunday: 17:00 - 22:00</li>
              <li className="text-gray-400">Monday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>
              © {new Date().getFullYear()} Gurkha Lounge. All rights reserved.
            </p>
            <p className="mt-1">Designed with ❤️ for authentic cuisine</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
