import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Palette, TrendingUp, Eye, Star, ExternalLink } from "lucide-react";
import { FaBook } from "react-icons/fa";
import { SiWattpad, SiFiverr, SiLinktree, SiYoutube, SiInstagram, SiTwitter } from "react-icons/si";
import { authorInfo, featuredBooks, trendingCovers, socialLinks } from "../mock";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative mt-20 md:mt-28 text-center flex flex-col items-center z-20 px-6">
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
          Live life<br />the <span className="text-purple-400 underline decoration-wavy">hard way</span>
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

        {/* Social Media Icons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href={socialLinks.webnovel} target="_blank" rel="noopener noreferrer" 
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <FaWebnovel className="w-5 h-5" />
          </a>
          <a href={socialLinks.wattpad} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiWattpad className="w-5 h-5" />
          </a>
          <a href={socialLinks.fiverr} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiFiverr className="w-5 h-5" />
          </a>
          <a href={socialLinks.linktree} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiLinktree className="w-5 h-5" />
          </a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiYoutube className="w-5 h-5" />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiInstagram className="w-5 h-5" />
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-700/50 flex items-center justify-center hover:bg-purple-800/40 hover:scale-110 transition">
            <SiTwitter className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* MOST VIEWED BOOKS SECTION */}
      <section className="relative mt-32 md:mt-40 px-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Most Viewed Books</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Reader favorites with millions of views across platforms
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBooks.map((book, i) => (
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
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{book.description}</p>

                    <div className="flex flex-wrap gap-3 text-xs text-white/70 mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{book.reads} reads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{book.rating}</span>
                      </div>
                    </div>

                    <Link to="/mybooks">
                      <button className="bg-purple-700/80 hover:bg-purple-600 px-4 py-2 rounded-xl transition shadow-lg text-sm font-medium flex items-center gap-2">
                        View More
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/mybooks">
              <motion.button
                className="px-8 py-3 rounded-xl bg-purple-700/80 hover:bg-purple-600 transition shadow-lg font-medium flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                View All Books
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TRENDING BOOK COVERS SECTION */}
      <section className="relative mt-32 md:mt-40 px-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Palette className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Trending Book Covers</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Latest cover designs that are making waves
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trendingCovers.map((cover, i) => (
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
                    Trending
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/bookcovers">
              <motion.button
                className="px-8 py-3 rounded-xl bg-purple-700/80 hover:bg-purple-600 transition shadow-lg font-medium flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Palette className="w-5 h-5" />
                View All Covers
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* LOGO ORBIT */}
      <section className="relative mt-32 flex justify-center items-center z-20 px-6 mb-20">
        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-purple-600/30 opacity-40 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-purple-900/40 blur-xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(160,0,255,0.6),transparent_75%)] blur-2xl" />

          <motion.img
            src={authorInfo.logo}
            alt="Silence of Scribes Logo"
            className="relative w-48 h-48 md:w-56 md:h-56 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
