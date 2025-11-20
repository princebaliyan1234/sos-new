import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { FaBook, FaDiscord } from "react-icons/fa";
import { SiWattpad, SiFiverr, SiLinktree, SiYoutube, SiInstagram, SiHoneygain } from "react-icons/si";
import { BookOpen } from "lucide-react";
import { contactInfo, socialLinks } from "../mock";

const Contact = () => {
  const socialPlatforms = [
    { name: "Webnovel", icon: FaBook, url: socialLinks.webnovel, color: "from-red-500 to-orange-500" },
    { name: "Wattpad", icon: SiWattpad, url: socialLinks.wattpad, color: "from-orange-500 to-yellow-500" },
    { name: "RoyalRoad", icon: BookOpen, url: socialLinks.royalroad, color: "from-blue-600 to-indigo-600" },
    { name: "Honeyfeed", icon: SiHoneygain, url: socialLinks.honeyfeed, color: "from-yellow-500 to-amber-500" },
    { name: "Fiverr", icon: SiFiverr, url: socialLinks.fiverr, color: "from-green-500 to-emerald-500" },
    { name: "Linktree", icon: SiLinktree, url: socialLinks.linktree, color: "from-emerald-500 to-teal-500" },
    { name: "YouTube", icon: SiYoutube, url: socialLinks.youtube, color: "from-red-600 to-red-500" },
    { name: "Instagram", icon: SiInstagram, url: socialLinks.instagram, color: "from-pink-500 to-purple-500" },
    { name: "Discord", icon: FaDiscord, url: socialLinks.discord, color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative mt-20 md:mt-32 px-6 z-20 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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

          <div className="relative p-8 md:p-10 rounded-2xl bg-[#140026]/60 backdrop-blur-xl border border-purple-700/30 shadow-2xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-20 pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-lg text-purple-300 hover:text-purple-200 transition">
                    {contactInfo.email}
                  </a>
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
          </div>

          {/* Social Media Platforms */}
          <div className="relative p-8 md:p-10 rounded-2xl bg-[#140026]/60 backdrop-blur-xl border border-purple-700/30 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-20 pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/20 border border-purple-700/30 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">{platform.name}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition rounded-lg pointer-events-none`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
