import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Coffee, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Frequency } from "../backend";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useActor } from "../hooks/useActor";

const frequencyOptions: { value: Frequency; label: string }[] = [
  { value: Frequency.daily, label: "Daily" },
  { value: Frequency.multipleTimesDaily, label: "Multiple Times a Day" },
  { value: Frequency.weekly, label: "Weekly" },
  { value: Frequency.biweekly, label: "Bi-Weekly" },
  { value: Frequency.occasionally, label: "Occasionally" },
];

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  favoriteCoffee: string;
  visitFrequency: Frequency | "";
  newsletterOptIn: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phoneNumber.trim())
    errors.phoneNumber = "Phone number is required.";
  if (!data.favoriteCoffee.trim())
    errors.favoriteCoffee = "Please share your favorite coffee.";
  if (!data.visitFrequency)
    errors.visitFrequency = "Please select your visit frequency.";
  return errors;
}

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    favoriteCoffee: "",
    visitFrequency: "",
    newsletterOptIn: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { actor } = useActor();

  const set = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (!actor) return;
    setLoading(true);
    try {
      await actor.registerCustomer({
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        favoriteCoffee: form.favoriteCoffee,
        visitFrequency: form.visitFrequency as Frequency,
        newsletterOptIn: form.newsletterOptIn,
      });
      if (form.newsletterOptIn) {
        await actor.subscribeToNewsletter(form.email);
      }
      setSuccess(true);
    } catch {
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-60 md:h-72 flex items-end pb-10 overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-coffee.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            Become a Member
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Join Our Community
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="container mx-auto px-6 max-w-xl">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-10 shadow-card text-center"
              data-ocid="register.success_state"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Welcome to Brew Haven!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thank you, <strong>{form.fullName}</strong>! You're now part of
                our growing community of coffee lovers. Expect exclusive offers,
                seasonal specials, and warm hellos next time you visit.
              </p>
              {form.newsletterOptIn && (
                <p className="text-sm text-primary font-medium">
                  ☕ You've been subscribed to our newsletter.
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Coffee className="w-7 h-7 text-primary" />
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Customer Registration
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Join us for exclusive offers and updates.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                data-ocid="register.modal"
              >
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                    placeholder="Maya Johnson"
                    data-ocid="register.input"
                  />
                  {errors.fullName && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="register.error_state"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="maya@example.com"
                    autoComplete="email"
                    data-ocid="register.input"
                  />
                  {errors.email && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="register.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phoneNumber}
                    onChange={(e) => set("phoneNumber", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    autoComplete="tel"
                    data-ocid="register.input"
                  />
                  {errors.phoneNumber && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="register.error_state"
                    >
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Favorite Coffee */}
                <div className="space-y-1.5">
                  <Label htmlFor="favoriteCoffee">
                    Favorite Coffee <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="favoriteCoffee"
                    value={form.favoriteCoffee}
                    onChange={(e) => set("favoriteCoffee", e.target.value)}
                    placeholder="e.g. Flat White, Cold Brew..."
                    data-ocid="register.input"
                  />
                  {errors.favoriteCoffee && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="register.error_state"
                    >
                      {errors.favoriteCoffee}
                    </p>
                  )}
                </div>

                {/* Visit Frequency */}
                <div className="space-y-1.5">
                  <Label htmlFor="frequency">
                    How often do you visit?{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.visitFrequency}
                    onValueChange={(v) => set("visitFrequency", v)}
                  >
                    <SelectTrigger id="frequency" data-ocid="register.select">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencyOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.visitFrequency && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="register.error_state"
                    >
                      {errors.visitFrequency}
                    </p>
                  )}
                </div>

                {/* Newsletter */}
                <div className="flex items-start gap-3 bg-secondary/30 rounded-xl p-4">
                  <Checkbox
                    id="newsletter"
                    checked={form.newsletterOptIn}
                    onCheckedChange={(checked) =>
                      set("newsletterOptIn", !!checked)
                    }
                    className="mt-0.5"
                    data-ocid="register.checkbox"
                  />
                  <div>
                    <Label
                      htmlFor="newsletter"
                      className="font-medium cursor-pointer"
                    >
                      Subscribe to exclusive offers & updates
                    </Label>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Be the first to know about seasonal specials, loyalty
                      rewards, and events.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-3 hover:bg-primary/90"
                  data-ocid="register.submit_button"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Registering...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
