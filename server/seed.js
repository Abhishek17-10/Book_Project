const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await Book.deleteMany(); // Clear existing

    await Book.insertMany([
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "A guide to building good habits and breaking bad ones.",
    coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical story about following your dreams.",
    coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Strategies for focused success in a distracted world.",
    coverImage: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "Explores two systems of thinking that drive our decisions.",
    coverImage: "https://m.media-amazon.com/images/I/71ZLnp0HcSL.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel depicting a totalitarian regime under Big Brother.",
    coverImage: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racial injustice in the Deep South.",
    coverImage: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "A narrative of humanity's creation and evolution.",
    coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "A financial book that contrasts two perspectives on money and investing.",
    coverImage: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
  },
  {
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    description: "A Japanese philosophy on finding purpose and living longer.",
    coverImage: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds through discipline and resilience.",
    coverImage: "https://m.media-amazon.com/images/I/81cC85D1xYL.jpg"
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    description: "How great leaders inspire action by starting with purpose.",
    coverImage: "https://m.media-amazon.com/images/I/71fZ4+YyRrL.jpg"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    description: "Understanding the science of habit formation and how to change them.",
    coverImage: "https://m.media-amazon.com/images/I/81u5fD+eUIL.jpg"
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    description: "A practical guide to personal freedom.",
    coverImage: "https://m.media-amazon.com/images/I/71rHiB1CwrL.jpg"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups and building the future.",
    coverImage: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about growing up and pursuing education despite all odds.",
    coverImage: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A Holocaust survivor’s story and exploration of finding purpose.",
    coverImage: "https://m.media-amazon.com/images/I/71uAI28kJuL.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    coverImage: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
  },
  {
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    description: "Simple lessons that can change your life and maybe the world.",
    coverImage: "https://m.media-amazon.com/images/I/81NOvbZy6jL.jpg"
  },
  {
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    description: "10 things nobody told you about being creative.",
    coverImage: "https://m.media-amazon.com/images/I/71hJ+ZkXfDL.jpg"
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    description: "An ancient Chinese military treatise on strategy and tactics.",
    coverImage: "https://m.media-amazon.com/images/I/91C+fzowbvL.jpg"
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    description: "Own your morning. Elevate your life.",
    coverImage: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    description: "Tactics, routines, and habits of billionaires, icons, and world-class performers.",
    coverImage: "https://m.media-amazon.com/images/I/81EzT3ZtQBL.jpg"
  },
  {
    title: "Digital Minimalism",
    author: "Cal Newport",
    description: "Choosing a focused life in a noisy world.",
    coverImage: "https://m.media-amazon.com/images/I/81uWB2F0YPL.jpg"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How today’s entrepreneurs use continuous innovation to create success.",
    coverImage: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    description: "The power of passion and perseverance.",
    coverImage: "https://m.media-amazon.com/images/I/71fsQw+3T8L.jpg"
  },
  {
    title: "Drive",
    author: "Daniel H. Pink",
    description: "The surprising truth about what motivates us.",
    coverImage: "https://m.media-amazon.com/images/I/71UJH8STpGL.jpg"
  },
  {
    title: "Crushing It!",
    author: "Gary Vaynerchuk",
    description: "How great entrepreneurs build their business and influence—and how you can too.",
    coverImage: "https://m.media-amazon.com/images/I/81KkrQWEHIL.jpg"
  },
  {
    title: "Rework",
    author: "Jason Fried & David Heinemeier Hansson",
    description: "Change the way you work forever.",
    coverImage: "https://m.media-amazon.com/images/I/71pbtCm+0LL.jpg"
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    description: "How to build habit-forming products.",
    coverImage: "https://m.media-amazon.com/images/I/71G9Z8NfNfL.jpg"
  },
  {
    title: "Essentialism",
    author: "Greg McKeown",
    description: "The disciplined pursuit of less.",
    coverImage: "https://m.media-amazon.com/images/I/71vLR01dBNL.jpg"
  }
]);

    console.log("Books seeded successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("Seeding error:", err);
    process.exit(1);
  });

