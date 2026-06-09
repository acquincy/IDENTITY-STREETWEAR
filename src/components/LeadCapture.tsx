import { motion } from "motion/react";
import { useState, FormEvent } from "react";

export function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="early-access" className="py-24 md:py-32 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Secure Your Spot
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Our next collection is strictly limited. Join the early access list to shop 24 hours before the public drop.
          </p>

          {status === "success" ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-white/10 p-8 border border-white/20"
             >
               <h3 className="text-2xl font-display font-bold mb-2">You're on the list.</h3>
               <p className="text-gray-300">Keep an eye on your inbox and messages.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input 
                    required
                    type="text" 
                    id="firstName" 
                    placeholder="FIRST NAME" 
                    className="w-full bg-white/5 border border-white/20 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all uppercase text-sm tracking-wider"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input 
                    required
                    type="text" 
                    id="lastName" 
                    placeholder="LAST NAME" 
                    className="w-full bg-white/5 border border-white/20 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all uppercase text-sm tracking-wider"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  required
                  type="email" 
                  id="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-white/5 border border-white/20 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all uppercase text-sm tracking-wider"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  id="phone" 
                  placeholder="PHONE NUMBER (FOR SMS DROPS)" 
                  className="w-full bg-white/5 border border-white/20 px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all uppercase text-sm tracking-wider"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black py-4 uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors mt-4"
              >
                {status === "submitting" ? "Processing..." : "Get Early Access"}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By joining, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
