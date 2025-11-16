import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BookMarked, Eye, Star, ExternalLink } from "lucide-react";
import { books } from "../mock";

const MyBooks = () => {
  return (
    <div className="min-h-screen">
      <section className="relative mt-20 md:mt-32 px-6 z-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
};

export default MyBooks;
