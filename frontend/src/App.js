import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search as SearchIcon } from "lucide-react";
import { authorInfo } from "./mock";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import BookCovers from "./pages/BookCovers";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-6 bg-[#1a002b]/70 backdrop-blur-xl border-b border-purple-800/30 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
        {/* LEFT — LOGO */}
        <Link to="/">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={authorInfo.logo} 
              alt="Silence of Scribes Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
        </Link>

        {/* CENTER — NAV LINKS (Desktop) */}
        <nav className="hidden md:flex gap-8 lg:gap-14 text-base lg:text-lg font-semibold text-white/80">
          <Link 
            to="/"
            className={`hover:text-white transition cursor-pointer ${
              isActive("/") ? "text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link 
            to="/mybooks"
            className={`hover:text-white transition cursor-pointer ${
              isActive("/mybooks") ? "text-white" : ""
            }`}
          >
            My Books
          </Link>
          <Link 
            to="/bookcovers"
            className={`hover:text-white transition cursor-pointer ${
              isActive("/bookcovers") ? "text-white" : ""
            }`}
          >
            Book Covers
          </Link>
        </nav>

        {/* RIGHT — CONTACT + SEARCH */}
        <div className="hidden md:flex items-center gap-6 text-base lg:text-lg font-semibold">
          <Link 
            to="/contact"
            className="hover:text-purple-300 transition cursor-pointer"
          >
            Contact Us
          </Link>

          <motion.button 
            onClick={handleSearchClick}
            className="w-11 h-11 rounded-full bg-[#24003d]/60 backdrop-blur-xl border border-purple-800/40 shadow-[0_0_20px_rgba(120,0,255,0.25)] flex items-center justify-center hover:scale-110 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SearchIcon className="w-5 h-5 opacity-90" />
          </motion.button>
        </div>

        {/* MOBILE HAMBURGER */}
        <motion.button
          className="md:hidden w-11 h-11 rounded-full bg-[#24003d]/60 backdrop-blur-xl border border-purple-800/40 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-[88px] bottom-0 w-64 bg-[#1a002b] border-l border-purple-800/30 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <nav className="flex flex-col gap-6 p-8 text-lg font-semibold">
                <Link 
                  to="/"
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    isActive("/") ? "text-purple-300" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/mybooks"
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    isActive("/mybooks") ? "text-purple-300" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Books
                </Link>
                <Link 
                  to="/bookcovers"
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    isActive("/bookcovers") ? "text-purple-300" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Covers
                </Link>
                <Link 
                  to="/contact"
                  className="hover:text-purple-300 transition cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="border-t border-purple-800/30 pt-6 mt-4">
                  <Link to="/search" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full flex items-center gap-2 justify-center py-2 px-4 rounded-xl bg-[#24003d]/60 border border-purple-800/40 hover:bg-purple-800/20 transition">
                      <SearchIcon className="w-4 h-4" />
                      Search
                    </button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full relative text-white font-sans overflow-x-hidden bg-[#0a0014]">
        {/* GLOBAL BACKGROUND GRADIENTS */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,0,180,0.4),transparent_60%)]" />
          <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-purple-800/40 to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mybooks" element={<MyBooks />} />
            <Route path="/bookcovers" element={<BookCovers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer className="relative text-center mt-20 py-8 md:py-12 text-white/40 border-t border-white/10 z-20 px-6">
          <p className="mb-2">© 2025 {authorInfo.brandName} — All rights reserved.</p>
          <p className="text-sm">Crafted with passion by {authorInfo.name}</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
