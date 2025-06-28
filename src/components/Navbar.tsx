import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { to: "/about", label: "About" },
  { type: "dropdown", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const projectLinks = [
  { to: "/projects/campground", label: "CampGround Site" },
  { to: "/projects/agentic-ai", label: "Agentic AI Community" },
  { to: "/projects/graph-api", label: "Graph API" },
  { to: "/projects/portfolio", label: "Portfolio" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false);
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

  const handleHomeClick = () => {
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
    setIsMobileMenuOpen(false);
  };

  const isExperienceActive = projectLinks.some(link => location.pathname === link.to);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:fixed md:flex md:flex-col md:justify-between md:items-center md:w-32 md:h-full md:top-0 md:left-0 md:py-8 md:z-50 border-r border-[#430A48] ${theme === 'light' ? 'md:bg-[#F4E1F2]' : 'md:bg-[#0D020D]'} md:block`}>
        {/* Logo/Brand */}
        <button
          className={`flex flex-col items-center mb-8 ${theme === 'light' ? 'text-[#430A48] font-bold' : 'text-white'}`}
          onClick={handleHomeClick}
        >
          <span className="text-2xl">Go to</span>
          <span className="text-xs font-bold tracking-widest mt-2">Home</span>
        </button>
        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-8 flex-1 justify-center">
          {navLinks.map((link, idx) => {
            if (link.type === "dropdown") {
              return (
                <div
                  key="experience-dropdown"
                  className="relative w-full flex justify-end md:block hidden"
                  onMouseEnter={() => setIsExperienceDropdownOpen(true)}
                  onMouseLeave={() => setIsExperienceDropdownOpen(false)}
                >
                  <button
                    className={`text-sm font-bold transition-colors px-2 py-1 rounded-md flex items-center gap-1 ${isExperienceActive ? 'bg-[#a259f7] text-white' : theme === 'light' ? 'text-[#430A48] hover:bg-[#a259f7] hover:text-white' : 'text-white hover:bg-[#921792]'}`}
                  >
                    Projects
                    <ChevronDown size={12} className={`transition-transform ${isExperienceDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isExperienceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-full top-0 ml-2 w-48 bg-background border border-input rounded-md shadow-lg z-50"
                      >
                        {projectLinks.map((plink) => (
                          <Link
                            key={plink.to}
                            to={plink.to}
                            className={`block px-4 py-2 text-sm transition-colors ${location.pathname === plink.to ? 'bg-[#a259f7] text-white' : 'text-foreground hover:bg-[#e9d5ff] hover:text-[#430A48]'}`}
                          >
                            {plink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            } else {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-bold transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? 'bg-[#a259f7] text-white' : theme === 'light' ? 'text-[#430A48] hover:bg-[#a259f7] hover:text-white' : 'text-white hover:bg-[#921792]'}`}
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </nav>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'light' ? 'bg-[#430A48]' : 'bg-purple-700'} text-2xl`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === "dark" ? "🔦" : "🌙"}
        </button>
      </aside>

      {/* Theme Toggle (Mobile) */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-16 z-50 p-2 mr-4 rounded-full bg-[#430A48] text-white md:hidden"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === "dark" ? "🔦" : "🌙"}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-[#430A48] text-white md:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 w-64 h-full z-50 flex flex-col border-r border-[#430A48] md:hidden ${theme === 'light' ? 'bg-[#F4E1F2]' : 'bg-[#0D020D]'}`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md bg-[#430A48] text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Logo/Brand */}
            <div className="flex flex-col items-center mb-8 mt-8">
              <button
                onClick={handleHomeClick}
                className={`flex flex-col items-center ${theme === 'light' ? 'text-[#430A48] font-bold' : 'text-white'}`}
              >
                <span className="text-2xl">Go to</span>
                <span className="text-xs font-bold tracking-widest mt-2">Home</span>
              </button>
            </div>

            {/* Nav Links - Centered and Experience as collapsible */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => {
                if (link.type === "dropdown") {
                  return (
                    <div key="experience-dropdown" className="w-full flex flex-col items-center">
                      <button
                        onClick={() => setIsExperienceDropdownOpen((open) => !open)}
                        className={`w-full text-left text-sm font-bold mb-2 flex items-center justify-center gap-1 ${theme === 'light' ? 'text-[#430A48]' : 'text-white'}`}
                      >
                        Experience
                        <ChevronDown size={14} className={`transition-transform ${isExperienceDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isExperienceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2 w-full items-center text-center"
                          >
                            {projectLinks.map((plink) => (
                              <Link
                                key={plink.to}
                                to={plink.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block w-full text-center px-4 py-2 text-sm rounded transition-colors ${location.pathname === plink.to ? 'bg-[#a259f7] text-white' : 'text-foreground hover:bg-[#e9d5ff] hover:text-[#430A48]'}`}
                              >
                                {plink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm font-bold transition-colors px-2 py-1 rounded-md ${location.pathname === link.to ? 'bg-[#a259f7] text-white' : theme === 'light' ? 'text-[#430A48] hover:bg-[#a259f7] hover:text-white' : 'text-white hover:bg-[#921792]'}`}
                    >
                      {link.label}
                    </Link>
                  );
                }
              })}
            </nav>


          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
