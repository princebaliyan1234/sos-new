// Mock data for Silence of Scribes portfolio

export const authorInfo = {
  name: "Waddle",
  brandName: "Silence of Scribes",
  tagline: "Author • Graphic Designer",
  bio: "Hello! My name is Waddle, also known as Silence of Scribes. I have been writing on Webnovel and other platforms since 2023, with a total writing experience of three years. Currently, I am an established author on Webnovel. I also create delightful book covers for myself and fellow authors.",
  experience: "3 Years",
  platforms: ["Webnovel", "Wattpad", "RoyalRoad", "Honeyfeed"],
  genres: ["Romance", "Apocalypse", "Supernatural", "School Life"],
  avatar: "https://customer-assets.emergentagent.com/job_00245f47-a588-49ed-8da6-6d7af4f40772/artifacts/fms112hj_Untitled%20design%20%286%29.png",
  logo: "https://customer-assets.emergentagent.com/job_00245f47-a588-49ed-8da6-6d7af4f40772/artifacts/q4w087zg_Untitled%20design.png"
};

export const books = [
  {
    id: 1,
    title: "Surviving in the Freezing Apocalypse with My Alpha",
    genre: "Romance",
    description: "When a deadly Freezing Apocalypse strikes, 12th-grader Ava is trapped in a school overrun by monstrous frostborn creatures. Forced to fight for survival, she crosses every boundary she once swore she'd never break—battling not only the horrors outside but also the ghosts of her past. As she struggles to protect her loved ones, she finds herself drawn back to Liam, the boy who once abandoned her, but now may be her only chance at survival.",
    cover: "https://67cd0def5e0d2d4699c652e9--silenceofscribes-sos.netlify.app/images/book%201%20cover.webp",
    chapters: 50,
    reads: "10K+",
    platform: "Webnovel",
    status: "Ongoing",
    rating: 4.8,
    isFeatured: true,
    link: "https://www.webnovel.com/book/surviving-in-the-freezing-apocalypse-with-my-alpha_31926521808111605"
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
  webnovel: "https://www.webnovel.com/profile/4324804498?appId=10",
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
