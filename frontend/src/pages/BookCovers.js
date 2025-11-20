import React from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { bookCovers } from "../mock";

const BookCovers = () => {
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
                className="relative group cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
    </div>
  );
};

export default BookCovers;
