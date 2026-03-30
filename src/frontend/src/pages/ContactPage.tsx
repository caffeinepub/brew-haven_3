import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const hours = [
  { day: "Monday", hours: "7:00 AM – 9:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 9:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 9:00 PM" },
  { day: "Friday", hours: "7:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 10:00 PM" },
];

export default function ContactPage() {
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
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            We'd Love to Hear from You
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Address
                    </p>
                    <p className="text-muted-foreground text-sm">
                      123 Brew Street, Coffee District, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground text-sm">
                      +1 (555) BREW-HAVEN
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground text-sm">
                      hello@brewhaven.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-secondary/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Business Hours
                  </h3>
                </div>
                <table className="w-full text-sm" data-ocid="contact.table">
                  <tbody>
                    {hours.map((h) => (
                      <tr
                        key={h.day}
                        className="border-b border-border last:border-0"
                      >
                        <td className="py-2.5 text-foreground font-medium">
                          {h.day}
                        </td>
                        <td className="py-2.5 text-muted-foreground text-right">
                          {h.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Find Us
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-card h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brew Haven location map"
                />
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-xs">
                <p className="font-display text-base font-semibold text-foreground mb-2">
                  Parking Available
                </p>
                <p className="text-muted-foreground text-sm">
                  Street parking on Brew Street (metered). Validated parking in
                  the Coffee District Garage (2 hrs free with purchase).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
