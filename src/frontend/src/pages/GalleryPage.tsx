import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const galleryImages = [
  {
    src: "/assets/generated/hero-coffee.dim_1600x900.jpg",
    alt: "Premium espresso shot",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/assets/generated/cafe-interior.dim_1200x800.jpg",
    alt: "Cozy café interior",
  },
  { src: "/assets/generated/barista.dim_800x600.jpg", alt: "Barista at work" },
  {
    src: "/assets/generated/coffee-menu.dim_800x600.jpg",
    alt: "Artisan coffee selection",
  },
  {
    src: "/assets/generated/cold-brew.dim_600x400.jpg",
    alt: "Cold brew coffee",
  },
  {
    src: "/assets/generated/snack-item.dim_600x400.jpg",
    alt: "Fresh pastries and snacks",
  },
  { src: "/assets/generated/dessert-item.dim_600x400.jpg", alt: "Desserts" },
  {
    src: "/assets/generated/gallery-customers.dim_800x600.jpg",
    alt: "Happy customers",
    span: "col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-60 md:h-72 flex items-end pb-10 overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('/assets/generated/gallery-customers.dim_800x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            Our World
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-2xl group ${
                  img.span || ""
                }`}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white font-sans text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
