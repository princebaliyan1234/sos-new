import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, BookOpen, Palette, X } from "lucide-react";
import { Link } from "react-router-dom";
import { books, bookCovers } from "../mock";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all, books, covers

  // Filter results based on search query
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCovers = bookCovers.filter(cover =>
    cover.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cover.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cover.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredBooks.length > 0 || filteredCovers.length > 0;

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
              <SearchIcon className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Search</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Find your favorite books and cover designs
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search for books, covers, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-xl bg-[#170026]/70 backdrop-blur-xl border border-purple-700/30 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-8 flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === "all"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-900/20 text-white/60 hover:text-white"
              }`}
            >
              All ({filteredBooks.length + filteredCovers.length})
            </button>
            <button
              onClick={() => setActiveTab("books")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === "books"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-900/20 text-white/60 hover:text-white"
              }`}
            >
              Books ({filteredBooks.length})
            </button>
            <button
              onClick={() => setActiveTab("covers")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === "covers"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-900/20 text-white/60 hover:text-white"
              }`}
            >
              Covers ({filteredCovers.length})
            </button>
          </div>

          {/* Results */}
          <div className="max-w-7xl mx-auto">
            {!searchQuery ? (
              <div className="text-center py-20">
                <SearchIcon className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <p className="text-white/40 text-lg">Start typing to search...</p>
              </div>
            ) : !hasResults ? (
              <div className="text-center py-20">
                <SearchIcon className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <p className="text-white/40 text-lg">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              <div className="space-y-12">
                {/* Books Results */}
                {(activeTab === "all" || activeTab === "books") && filteredBooks.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                      <h3 className="text-2xl font-bold">Books</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredBooks.map((book) => (
                        <Link key={book.id} to="/mybooks">
                          <motion.div
                            className="p-4 rounded-xl bg-[#170026]/70 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex gap-4">
                              <img
                                src={book.cover}
                                alt={book.title}
                                className="w-20 h-28 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">{book.title}</h4>
                                <p className="text-purple-400 text-sm mb-2">{book.genre}</p>
                                <p className="text-white/60 text-sm line-clamp-2">{book.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Covers Results */}
                {(activeTab === "all" || activeTab === "covers") && filteredCovers.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Palette className="w-6 h-6 text-purple-400" />
                      <h3 className="text-2xl font-bold">Book Covers</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {filteredCovers.map((cover) => (
                        <Link key={cover.id} to="/bookcovers">
                          <motion.div
                            className="relative group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                          >
                            <img
                              src={cover.image}
                              alt={cover.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition rounded-lg">
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h4 className="text-sm font-bold">{cover.title}</h4>
                                <p className="text-xs text-purple-300">{cover.genre}</p>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Search;
