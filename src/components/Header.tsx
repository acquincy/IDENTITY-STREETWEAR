import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter uppercase">
          Identity
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#collections" className="hover:text-gray-500 transition-colors">Collections</a>
          <a href="#story" className="hover:text-gray-500 transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-gray-500 transition-colors">Gallery</a>
        </nav>

        <div className="hidden md:block">
          <a 
            href="#early-access" 
            className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider"
          >
            Join the List
          </a>
        </div>

        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 bg-white w-full border-b border-gray-100 px-6 py-8 flex flex-col gap-6 shadow-xl"
        >
          <a href="#collections" onClick={() => setIsOpen(false)} className="text-lg font-medium">Collections</a>
          <a href="#story" onClick={() => setIsOpen(false)} className="text-lg font-medium">Our Story</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium">Gallery</a>
          <a 
            href="#early-access" 
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-6 py-4 text-center font-medium mt-4 uppercase tracking-wider"
          >
            Join the List
          </a>
        </motion.div>
      )}
    </header>
  );
}
