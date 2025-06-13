import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:flex md:flex-col md:justify-between md:items-center md:w-24 md:h-full md:top-0 md:left-0 md:bg-[#0a0a1a] md:py-8 md:z-50 border-r border-[#232336]">
        {/* Logo/Brand */}
        <Link to="/" className="flex flex-col items-center mb-8">
          <span className="text-4xl">🍪</span>
          <span className="text-xs font-bold tracking-widest text-white mt-2">BISCUIT</span>
        </Link>
        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-white text-sm font-medium transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? "bg-[#232336] text-primary" : "hover:bg-[#18182a]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-transparent text-2xl mt-8"
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === "dark" ? "🙂" : "🌙"}
        </motion.button>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#0a0a1a] flex items-center justify-between px-4 py-3 border-b border-[#232336]">
        <div className="flex items-center">
          <span className="text-3xl">🍪</span>
          <span className="ml-2 text-base font-bold tracking-widest text-white">BISCUIT</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent text-2xl"
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === "dark" ? "🙂" : "🌙"}
          </motion.button>
          <button
            className="ml-2 p-2 rounded-full bg-muted/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-[#0a0a1a] z-50 flex flex-col py-8 border-r border-[#232336] md:hidden"
          >
            <div className="flex flex-col items-center mb-8">
              <span className="text-4xl">🍪</span>
              <span className="text-xs font-bold tracking-widest text-white mt-2">BISCUIT</span>
            </div>
            <nav className="flex flex-col items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-white text-base font-medium transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? "bg-[#232336] text-primary" : "hover:bg-[#18182a]"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-transparent text-2xl mt-8 mx-auto"
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === "dark" ? "🙂" : "🌙"}
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
