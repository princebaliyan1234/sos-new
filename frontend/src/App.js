import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, BookOpen, Palette, Mail, ExternalLink, Star, Eye, BookMarked } from "lucide-react";
import { authorInfo, books, bookCovers, socialLinks, contactInfo } from "./mock";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close menu when clicking outside or on a link
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "mybooks", "bookcovers", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full relative text-white font-sans overflow-x-hidden bg-[#0a0014]">
      {/* GLOBAL BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,0,180,0.4),transparent_60%)]" />
        <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-purple-800/40 to-transparent" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-6 bg-[#1a002b]/70 backdrop-blur-xl border-b border-purple-800/30 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
        {/* LEFT — LOGO */}
        <motion.div 
          className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-purple-300 cursor-pointer"
          onClick={() => handleNavClick("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>S</span>
        </motion.div>

        {/* CENTER — NAV LINKS (Desktop) */}
        <nav className="hidden md:flex gap-8 lg:gap-14 text-base lg:text-lg font-semibold text-white/80">
          <a 
            className={`hover:text-white transition cursor-pointer ${
              activeSection === "home" ? "text-white underline" : ""
            }`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a 
            className={`hover:text-white transition cursor-pointer ${
              activeSection === "mybooks" ? "text-white underline" : ""
            }`}
            onClick={() => handleNavClick("mybooks")}
          >
            My Books
          </a>
          <a 
            className={`hover:text-white transition cursor-pointer ${
              activeSection === "bookcovers" ? "text-white underline" : ""
            }`}
            onClick={() => handleNavClick("bookcovers")}
          >
            Book Covers
          </a>
        </nav>

        {/* RIGHT — CONTACT + SEARCH */}
        <div className="hidden md:flex items-center gap-6 text-base lg:text-lg font-semibold">
          <a 
            className="hover:text-purple-300 transition cursor-pointer"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </a>

          <motion.button 
            className="w-11 h-11 rounded-full bg-[#24003d]/60 backdrop-blur-xl border border-purple-800/40 shadow-[0_0_20px_rgba(120,0,255,0.25)] flex items-center justify-center hover:scale-110 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-5 h-5 opacity-90" />
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
                <a 
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    activeSection === "home" ? "text-purple-300" : ""
                  }`}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </a>
                <a 
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    activeSection === "mybooks" ? "text-purple-300" : ""
                  }`}
                  onClick={() => handleNavClick("mybooks")}
                >
                  My Books
                </a>
                <a 
                  className={`hover:text-purple-300 transition cursor-pointer ${
                    activeSection === "bookcovers" ? "text-purple-300" : ""
                  }`}
                  onClick={() => handleNavClick("bookcovers")}
                >
                  Book Covers
                </a>
                <a 
                  className="hover:text-purple-300 transition cursor-pointer"
                  onClick={() => handleNavClick("contact")}
                >
                  Contact Us
                </a>
                <div className="border-t border-purple-800/30 pt-6 mt-4">
                  <button className="w-full flex items-center gap-2 justify-center py-2 px-4 rounded-xl bg-[#24003d]/60 border border-purple-800/40 hover:bg-purple-800/20 transition">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative mt-20 md:mt-28 text-center flex flex-col items-center z-20 px-6">
        <div className="relative">
          <div className="absolute inset-0 w-40 h-40 md:w-60 md:h-60 bg-[radial-gradient(circle,rgba(150,0,255,0.55),transparent_70%)] blur-2xl -z-10" />

          <motion.img
            src={authorInfo.avatar}
            alt="Waddle"
            className="w-32 h-32 md:w-36 md:h-36 rounded-2xl shadow-2xl object-cover"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <motion.p 
          className="mt-8 md:mt-10 text-white/60 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello! I Am <span className="text-purple-300">{authorInfo.name}</span>
        </motion.p>

        <motion.h1 
          className="mt-4 text-4xl md:text-5xl font-extrabold leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Judges a book<br />by its <span className="text-purple-400 underline decoration-wavy">cover?</span>
        </motion.h1>

        <motion.p 
          className="mt-6 max-w-2xl text-white/60 text-base md:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {authorInfo.bio}
        </motion.p>

        {/* Platform Badges */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {authorInfo.platforms.map((platform, i) => (
            <span 
              key={i}
              className="px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/50 text-sm font-medium"
            >
              {platform}
            </span>
          ))}
        </motion.div>
      </section>

      {/* MY BOOKS SECTION */}
      <section id="mybooks" className="relative mt-32 md:mt-40 px-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">My Books</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Dive into worlds of magic, mystery, and adventure. Each story crafted with passion and imagination.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book.id}
                className="relative p-6 rounded-2xl bg-[#170026]/70 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,rgba(255,0,255,0.4),transparent_70%)] blur-2xl opacity-40" />

                <div className="flex gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-32 h-48 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {book.status}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-purple-300 transition">
                      {book.title}
                    </h3>
                    <p className="text-purple-400 text-sm mb-3 font-medium">{book.genre}</p>
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">{book.description}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-white/70">
                      <div className="flex items-center gap-1">
                        <BookMarked className="w-4 h-4" />
                        <span>{book.chapters} chapters</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{book.reads} reads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{book.rating}</span>
                      </div>
                    </div>

                    <button className="mt-4 bg-purple-700/80 hover:bg-purple-600 px-4 py-2 rounded-xl transition shadow-lg text-sm font-medium flex items-center gap-2">
                      Read on {book.platform}
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BOOK COVERS SECTION */}
      <section id="bookcovers" className="relative mt-32 md:mt-40 px-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Book Covers</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Bringing stories to life through visual artistry. Each cover tells a story before you even turn the page.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookCovers.map((cover, i) => (
              <motion.div
                key={cover.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={cover.image} 
                    alt={cover.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold mb-1">{cover.title}</h3>
                      <p className="text-sm text-purple-300 mb-2">{cover.genre}</p>
                      <p className="text-xs text-white/70">{cover.author} • {cover.year}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-bold">
                    {cover.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* LOGO ORBIT */}
      <section className="relative mt-32 flex justify-center items-center z-20 px-6">
        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-purple-600/30 opacity-40 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-purple-900/40 blur-xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(160,0,255,0.6),transparent_75%)] blur-2xl" />

          <motion.div 
            className="relative text-6xl md:text-7xl font-bold text-purple-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            S
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative mt-32 md:mt-40 px-6 z-20 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Interested in collaborating or commissioning a cover? Let's create something amazing together.
            </p>
          </div>

          <div className="relative p-8 md:p-10 rounded-2xl bg-[#140026]/60 backdrop-blur-xl border border-purple-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-20 pointer-events-none" />
            
            <div className="relative grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <p className="text-lg text-purple-300">{contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Location</p>
                    <p className="text-lg">{contactInfo.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Availability</p>
                    <p className="text-lg text-green-400">{contactInfo.availability}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Response Time</p>
                    <p className="text-lg">{contactInfo.response}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-3">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-700/30 hover:bg-purple-800/30 hover:border-purple-500/50 transition group"
                    >
                      <span className="capitalize font-medium">{platform}</span>
                      <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative text-center mt-20 py-8 md:py-12 text-white/40 border-t border-white/10 z-20 px-6">
        <p className="mb-2">© 2025 {authorInfo.brandName} — All rights reserved.</p>
        <p className="text-sm">Crafted with passion by {authorInfo.name}</p>
      </footer>
    </div>
  );
}

export default App;
