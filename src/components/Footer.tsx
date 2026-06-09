export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4">
            Identity
          </h2>
          <p className="text-gray-400 max-w-sm">
            Premium streetwear engineered for the avant-garde. We don't follow trends; we set the standard for modern uniform essentials.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><a href="#collections" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Collections</a></li>
            <li><a href="#story" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Our Story</a></li>
            <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Gallery</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Lookbook</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Support</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Size Guide</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} IDENTITY. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
