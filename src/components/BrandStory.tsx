import { motion } from "motion/react";

export function BrandStory() {
  return (
    <section id="story" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-gray-200 relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=80&w=1000" 
              alt="Urban environment reflecting brand aesthetic" 
              className="w-full h-full object-cover grayscale opacity-90"
            />
            {/* Minimalist Graphic Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/30 flex items-center justify-center mixing-blend-difference">
               <span className="text-white text-6xl font-display font-bold uppercase tracking-tighter opacity-50">ID</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">
              Forged in the Concrete.
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Identity isn't assigned; it's chosen. We started with a simple belief: clothing should be the truest reflection of the individual wearing it. 
              </p>
              <p>
                Sourcing ultra-premium, heavyweight fabrics and leveraging architectural silhouettes, we create uniform essentials for the modern non-conformist. No loud logos. No fleeting trends. Just immaculate construction and uncompromising attitude.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8">
              <div>
                <p className="text-4xl font-display font-bold text-black mb-2">350+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">GSM Heavyweight Cotton</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-black mb-2">12</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Months of R&D per piece</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
