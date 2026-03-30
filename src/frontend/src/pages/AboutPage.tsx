import { Award, Heart, Leaf } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const values = [
  {
    icon: Heart,
    title: "Passion First",
    desc: "Every cup is made with genuine love for the craft. Our baristas are artists who treat each espresso pull as a performance.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "We partner exclusively with fair-trade farms to bring you beans that are good for you and the planet.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "From bean selection to the final pour, we maintain rigorous standards that set Brew Haven apart.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden pt-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/generated/cafe-interior.dim_1200x800.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            Our Journey
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
                The Beginning
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-5 leading-snug">
                How Brew Haven Came to Life
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2015, two coffee-obsessed friends — Maya and Eli — quit their
                corporate jobs to chase a dream: building the perfect
                neighborhood café. They spent six months traveling through
                Ethiopia, Colombia, and Japan studying coffee culture before
                opening the first Brew Haven on Brew Street.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The vision was clear from day one: no compromise on quality, no
                strangers at the counter. Every customer would be greeted by
                name, every drink crafted with intention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Brew Haven serves over 500 guests daily and has become a
                landmark in the Coffee District — a place where community
                gathers, ideas bloom, and every cup feels like coming home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="/assets/generated/cafe-interior.dim_1200x800.jpg"
                alt="Brew Haven interior"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Mission & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Barista Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-card order-2 md:order-1"
            >
              <img
                src="/assets/generated/barista.dim_800x600.jpg"
                alt="Brew Haven barista"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
                Our Craft
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-5 leading-snug">
                Barista Excellence & Quality Promise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every member of our barista team undergoes 200+ hours of
                hands-on training before their first solo shift. We study
                extraction ratios, milk texturing science, and latte art —
                because we believe the details make all the difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our quality promise: if your drink isn't perfect, we'll make it
                again. No questions asked. That's the Brew Haven guarantee.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-2xl font-bold text-primary">
                    200+
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Training Hours
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">
                    500+
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Daily Guests
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">
                    9 yrs
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    In Business
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
