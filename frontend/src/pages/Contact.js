import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { contactInfo, socialLinks } from "../mock";

const Contact = () => {
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
    </div>
  );
};

export default Contact;
