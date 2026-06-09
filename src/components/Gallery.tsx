import { motion } from "motion/react";
import { Instagram } from "lucide-react";

// Grid layout specific for an IG-style photo array
const photos = [
  "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1574345209386-3023e13d9692?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">
          #IdentityWorldwide
        </h2>
        <a 
          href="#" 
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          Follow Us
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 px-1 md:px-6 max-w-7xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="aspect-square group relative overflow-hidden bg-gray-100 cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            </div>
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
