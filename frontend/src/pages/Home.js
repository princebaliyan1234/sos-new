import React from "react";
import { motion } from "framer-motion";
import { authorInfo } from "../mock";

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

      {/* LOGO ORBIT */}
      <section className="relative mt-32 flex justify-center items-center z-20 px-6 mb-20">
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
    </div>
  );
};

export default Home;
