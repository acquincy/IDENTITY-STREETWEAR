import { motion } from "motion/react";

const collections = [
  {
    id: 1,
    title: "Heavyweight Hoodie",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Utility Cargo",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Oversized Graphic Tee",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"
  }
];

export function Featured() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Featured Archive
            </h2>
          </motion.div>
          <div className="hidden md:block">
            <a href="#" className="uppercase tracking-widest text-sm font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
              View All
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
