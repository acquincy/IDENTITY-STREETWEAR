/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Featured } from "./components/Featured";
import { BrandStory } from "./components/BrandStory";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { LeadCapture } from "./components/LeadCapture";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <BrandStory />
      <Testimonials />
      <Gallery />
      <LeadCapture />
      <Footer />
    </div>
  );
}
