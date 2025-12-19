import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-auto px-2 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-lg transition-shadow">
              LBSCEKB
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#events"
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </a>
            <a
              href="#leaders"
              className="text-foreground hover:text-primary transition-colors"
            >
              Leaders
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link
              href="#announcements"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Announcements
            </Link>
            <Link
              href="#membership"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Membership
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Events
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Contact
            </Link>
            <button className="w-full mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-medium">
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
