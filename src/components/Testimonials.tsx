import { motion } from "motion/react";

const quotes = [
  {
    text: "The fit is immaculate. Finally a brand that understands proportions. The heavyweight hoodies are unmatched.",
    author: "J. Cole",
    location: "New York, NY"
  },
  {
    text: "Minimalist pieces that speak louder than brands covered in logos. You can feel the quality immediately.",
    author: "Sarah M.",
    location: "London, UK"
  },
  {
    text: "Dropped out of my usual rotation to exclusively wear Identity. Their cargo pants are architectural.",
    author: "T. Chen",
    location: "Los Angeles, CA"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-16">
          Worn by the Vanguard
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-gray-100 py-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="px-6 first:pt-0 pt-12 md:pt-0"
            >
              <div className="flex space-x-1 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-6">"{quote.text}"</p>
              <div>
                <p className="font-bold uppercase tracking-wider text-sm text-black">{quote.author}</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{quote.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
