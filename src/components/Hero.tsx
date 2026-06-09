import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1528701800487-ba01fea498c0?auto=format&fit=crop&q=80&w=2000" 
            alt="Streetwear model in urban setting" 
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-lg text-balance">
            Wear Your<br/>Identity
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium"
        >
          Exclusive streetwear designed for those who stand out. 
          Limited drops. Uncompromised quality.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#early-access"
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Join the Drop List
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
