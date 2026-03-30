import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Loader2, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useActor } from "../hooks/useActor";

const featuredItems = [
  {
    name: "Signature Espresso",
    price: "$4.50",
    desc: "Rich, bold espresso crafted from our single-origin Ethiopian blend.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "Bestseller",
  },
  {
    name: "Cold Brew Supreme",
    price: "$5.75",
    desc: "Slow-steeped 18 hours for silky-smooth, low-acid perfection.",
    image: "/assets/generated/cold-brew.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Artisan Pastry Box",
    price: "$8.00",
    desc: "Freshly baked daily — croissants, scones, and seasonal pastries.",
    image: "/assets/generated/snack-item.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Chocolate Lava Cake",
    price: "$7.50",
    desc: "Warm dark chocolate cake with a molten center and berry compote.",
    image: "/assets/generated/dessert-item.dim_600x400.jpg",
    badge: "Chef's Pick",
  },
];

const testimonials = [
  {
    name: "Sophia L.",
    role: "Graphic Designer",
    quote:
      "Brew Haven is my daily ritual. The espresso is genuinely world-class — rich, smooth, and perfectly pulled every time.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Software Engineer",
    quote:
      "The Wi-Fi is fast, the cold brew is excellent, and the vibe is unmatched. I've written half my startup here.",
    stars: 5,
  },
  {
    name: "Priya N.",
    role: "Freelance Writer",
    quote:
      "From the moment you walk in, you feel at home. The baristas remember your name and your order. Pure magic.",
    stars: 5,
  },
];

const STARS = [1, 2, 3, 4, 5];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STARS.slice(0, count).map((n) => (
        <Star key={n} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const { actor } = useActor();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setNewsletterLoading(true);
    try {
      if (actor) await actor.subscribeToNewsletter(email.trim());
      toast.success("You're subscribed! Welcome to the Brew Haven family.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-coffee.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-sans font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Welcome to Brew Haven
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Freshly Brewed Happiness in Every Cup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-lg mb-10 leading-relaxed"
          >
            A cozy corner where every sip tells a story. Handcrafted coffee,
            warm ambiance, and a community that feels like home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
              data-ocid="hero.primary_button"
            >
              Order Now
            </Link>
            <Link
              to="/contact"
              className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              data-ocid="hero.secondary_button"
            >
              Visit Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 leading-snug">
                More Than Coffee — It's a Feeling
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Founded in 2015 on Brew Street, Brew Haven was born from a
                simple idea: that a great cup of coffee should feel like a warm
                hug. Our beans are sourced from small farms, roasted in-house,
                and pulled by baristas who treat every shot as a craft.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're catching up with friends, diving into deep work,
                or simply slowing down — we've built a space that honors all of
                life's important moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                data-ocid="story.link"
              >
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="/assets/generated/cafe-interior.dim_1200x800.jpg"
                alt="Brew Haven café interior"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
              From Our Kitchen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Menu
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
                data-ocid={`menu.item.${i + 1}`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-sm">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
              data-ocid="menu.primary_button"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
              Happy Customers
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-secondary/40 rounded-2xl p-7 shadow-xs"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <StarRating count={t.stars} />
                <p className="text-foreground/80 leading-relaxed mt-4 mb-5 text-sm italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-espresso">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
              Stay Connected
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-espresso-foreground mb-3">
              Get Exclusive Offers & Updates
            </h2>
            <p className="text-espresso-foreground/70 text-sm mb-8">
              Be the first to know about new brews, seasonal specials, and
              events.
            </p>
            <form
              onSubmit={handleNewsletter}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-espresso-foreground placeholder:text-espresso-foreground/50 focus:border-accent"
                data-ocid="newsletter.input"
              />
              <Button
                type="submit"
                disabled={newsletterLoading}
                className="bg-accent text-accent-foreground font-semibold rounded-full px-6 hover:bg-accent/90 whitespace-nowrap"
                data-ocid="newsletter.submit_button"
              >
                {newsletterLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
