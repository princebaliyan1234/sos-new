// Mock data for Silence of Scribes portfolio

export const authorInfo = {
  name: "Waddle",
  brandName: "Silence of Scribes",
  tagline: "Author • Graphic Designer",
  bio: "Live life the hard way. I'm a fantasy & fiction author with 3 years of experience, established on Webnovel, Wattpad, RoyalRoad, and many more. I also create delightful book covers for myself and fellow authors.",
  experience: "3 Years",
  platforms: ["Webnovel", "Wattpad", "RoyalRoad", "Scribble Hub"],
  genres: ["Fantasy", "Fiction", "Dark Fantasy", "Adventure"],
  avatar: "https://customer-assets.emergentagent.com/job_web-mockup/artifacts/xkajzn6l_Untitled%20design%20%286%29.png",
  logo: "https://customer-assets.emergentagent.com/job_web-mockup/artifacts/pmx3ejds_Untitled%20design.png"
};

export const books = [
  {
    id: 1,
    title: "The Shadow Realm Chronicles",
    genre: "Dark Fantasy",
    description: "A tale of forbidden magic, ancient prophecies, and the thin line between light and darkness. Follow Kael as he navigates a world where shadows hold more than just secrets.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=900&fit=crop",
    chapters: 145,
    reads: "2.4M",
    platform: "Webnovel",
    status: "Ongoing",
    rating: 4.8,
    isFeatured: true
  },
  {
    id: 2,
    title: "Echoes of Eternity",
    genre: "Fantasy Adventure",
    description: "When time fractures, heroes rise from unexpected places. An epic journey through parallel timelines where every choice echoes through eternity.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=900&fit=crop",
    chapters: 98,
    reads: "1.8M",
    platform: "Wattpad",
    status: "Completed",
    rating: 4.7,
    isFeatured: false
  },
  {
    id: 3,
    title: "Whispers in the Void",
    genre: "Sci-Fi Fantasy",
    description: "In the space between worlds, whispers become screams. A mind-bending fusion of science fiction and fantasy that questions the nature of reality itself.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=900&fit=crop",
    chapters: 72,
    reads: "1.2M",
    platform: "RoyalRoad",
    status: "Ongoing",
    rating: 4.9,
    isFeatured: false
  },
  {
    id: 4,
    title: "Crown of Thorns and Starlight",
    genre: "Romantic Fantasy",
    description: "A cursed prince, a rebellious star-weaver, and a kingdom on the brink of war. Love blooms in the darkest of times in this sweeping romantic fantasy.",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&h=900&fit=crop",
    chapters: 110,
    reads: "3.1M",
    platform: "Webnovel",
    status: "Completed",
    rating: 4.8,
    isFeatured: true
  }
];

export const bookCovers = [
  {
    id: 1,
    title: "The Dragon's Oath",
    author: "Client Commission",
    genre: "Epic Fantasy",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=900&fit=crop",
    year: 2024,
    description: "A majestic dragon-themed cover featuring intricate golden details and mystical elements.",
    isTrending: true
  },
  {
    id: 2,
    title: "Neon Shadows",
    author: "Personal Project",
    genre: "Cyberpunk",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=900&fit=crop",
    year: 2024,
    description: "A futuristic cyberpunk design with vibrant neon colors and urban aesthetics.",
    isTrending: true
  },
  {
    id: 3,
    title: "Moon's Embrace",
    author: "Wattpad Commission",
    genre: "Paranormal Romance",
    image: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=600&h=900&fit=crop",
    year: 2023,
    description: "A haunting romantic cover featuring moonlit silhouettes and ethereal atmospheric effects.",
    isTrending: false
  },
  {
    id: 4,
    title: "The Last Spellbound",
    author: "RoyalRoad Commission",
    genre: "Urban Fantasy",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=900&fit=crop",
    year: 2024,
    description: "Modern city meets ancient magic in this stunning urban fantasy cover design.",
    isTrending: true
  }
];

export const socialLinks = {
  webnovel: "https://www.webnovel.com",
  wattpad: "https://www.wattpad.com",
  royalroad: "https://www.royalroad.com",
  fiverr: "https://www.fiverr.com",
  linktree: "https://linktr.ee",
  youtube: "https://www.youtube.com",
  instagram: "https://www.instagram.com",
  twitter: "https://twitter.com",
  email: "waddle@silenceofscribes.com"
};

export const contactInfo = {
  email: "waddle@silenceofscribes.com",
  location: "Available Worldwide",
  availability: "Open for commissions",
  response: "Usually responds within 24-48 hours"
};

// Featured content for home page
export const featuredBooks = books.filter(book => book.isFeatured);
export const trendingCovers = bookCovers.filter(cover => cover.isTrending);
