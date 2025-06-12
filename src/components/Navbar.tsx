import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface NavbarProps {
  theme?: "light" | "dark";
  toggleTheme?: () => void;
}

const Navbar = ({ theme = "dark", toggleTheme = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-sm" : "py-4 bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&q=80"
              alt="Logo"
              className="w-6 h-6 object-cover"
            />
          </div>
          <span className="ml-2 text-xl font-bold">BISCUIT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="/work"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 15 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </motion.button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              <Link
                to="/about"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
