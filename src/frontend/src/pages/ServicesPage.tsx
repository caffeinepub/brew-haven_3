import { Link } from "@tanstack/react-router";
import { PartyPopper, ShoppingBag, Utensils, Wifi } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    icon: Utensils,
    title: "Dine-In Experience",
    desc: "Sink into our curated interiors — warm wood, soft lighting, and the gentle hum of a coffee grinder. Whether you have 15 minutes or an entire afternoon, our space welcomes all.",
    features: [
      "Comfortable seating for 60+",
      "Quiet zones and social areas",
      "Rotating art exhibitions",
      "Seasonal menu specials",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Takeaway & Online Ordering",
    desc: "Your Brew Haven fix, wherever life takes you. Order ahead via our app to skip the queue, or grab your cup at our dedicated express counter.",
    features: [
      "Mobile app ordering",
      "Express pickup counter",
      "Eco-friendly packaging",
      "Custom brew requests",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event Catering",
    desc: "Elevate your next event with Brew Haven's premium coffee bar. From corporate brunches to intimate celebrations, our mobile barista team brings the full café experience to you.",
    features: [
      "Full espresso bar setup",
      "Trained barista staff",
      "Custom branded cups",
      "Minimum 20 guests",
    ],
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi Workspace",
    desc: "Power outlets at every table, blazing 500 Mbps fiber Wi-Fi, and an ambiance engineered for focus. Brew Haven is the remote worker's best-kept secret.",
    features: [
      "500 Mbps fiber internet",
      "Dedicated power outlets",
      "Quiet focus zone",
      "All-day seating welcome",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-60 md:h-72 flex items-end pb-10 overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('/assets/generated/cafe-interior.dim_1200x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-espresso">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-espresso-foreground mb-4">
              Ready to Experience Brew Haven?
            </h2>
            <p className="text-espresso-foreground/70 mb-8 text-sm">
              Book a table, order online, or plan your next event with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors text-sm"
                data-ocid="services.primary_button"
              >
                Get in Touch
              </Link>
              <Link
                to="/register"
                className="border border-white/40 text-espresso-foreground font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
                data-ocid="services.secondary_button"
              >
                Join Our Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
