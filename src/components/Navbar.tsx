import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      <aside className={`hidden md:fixed md:flex md:flex-col md:justify-between md:items-center md:w-24 md:h-full md:top-0 md:left-0 md:py-8 md:z-50 border-r border-[#430A48] ${theme === 'light' ? 'md:bg-[#F4E1F2]' : 'md:bg-[#0D020D]'}`}>
        {/* Logo/Brand */}
        <button
          className={`flex flex-col items-center mb-8 ${theme === 'light' ? 'text-[#430A48] font-bold' : 'text-white'}`}
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                const hero = document.getElementById('hero');
                if (hero) hero.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              const hero = document.getElementById('hero');
              if (hero) hero.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-2xl">Go to</span>
          <span className="text-xs font-bold tracking-widest mt-2">Home</span>
        </button>
        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-bold transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? 'bg-[#a259f7] text-white' : theme === 'light' ? 'text-[#430A48] hover:bg-[#a259f7] hover:text-white' : 'text-white hover:bg-[#921792]'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full text-2xl mt-8"
          style={{ backgroundColor: theme === 'dark' ? 'rgba(52, 7, 48, 0.85)' : 'rgba(180, 30, 180, 0.9)' }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === "dark" ? "💡" : "🌙"}
        </motion.button>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#0D020D] flex items-center justify-between px-4 py-3 border-b border-[#430A48]">
        <div className="flex items-center">
          <span className="text-3xl">Go to</span>
          <span className="ml-2 text-base font-bold tracking-widest text-white">Home</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent text-2xl"
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === "dark" ? "💡" : "🌙"}
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
            className={`fixed top-0 left-0 w-64 h-full z-50 flex flex-col py-8 border-r border-[#430A48] md:hidden ${theme === 'light' ? 'bg-[#F4E1F2]' : 'bg-[#0D020D]'}`}
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
                  className={`text-white text-base font-medium transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? "bg-[#430A48] text-primary" : "hover:bg-[#18182a]"}`}
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
