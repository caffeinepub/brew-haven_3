import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const coffeeItems = [
  {
    name: "Signature Espresso",
    price: "$4.50",
    desc: "Single-origin Ethiopian Yirgacheffe, rich crema, dark chocolate notes.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "Bestseller",
  },
  {
    name: "Flat White",
    price: "$5.00",
    desc: "Double ristretto with velvety microfoam — pure balance in a cup.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "",
  },
  {
    name: "Cortado",
    price: "$4.75",
    desc: "Equal parts espresso and warm milk. Bold, smooth, and precise.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "",
  },
  {
    name: "Dirty Chai Latte",
    price: "$6.00",
    desc: "Masala chai with a double shot espresso and oat milk. A spiced delight.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "Staff Pick",
  },
  {
    name: "Pour Over",
    price: "$5.50",
    desc: "Slow-drip V60 brew showcasing single-origin floral and citrus profiles.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "",
  },
  {
    name: "Cappuccino",
    price: "$5.25",
    desc: "Equal thirds espresso, steamed milk, and thick foam. Classic done right.",
    image: "/assets/generated/coffee-menu.dim_800x600.jpg",
    badge: "",
  },
];

const coldItems = [
  {
    name: "Cold Brew Supreme",
    price: "$5.75",
    desc: "18-hour slow-steep, served over ice. Silky, low-acid, naturally sweet.",
    image: "/assets/generated/cold-brew.dim_600x400.jpg",
    badge: "Bestseller",
  },
  {
    name: "Iced Caramel Macchiato",
    price: "$6.25",
    desc: "Vanilla syrup, cold milk, espresso, and salted caramel drizzle.",
    image: "/assets/generated/cold-brew.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Matcha Latte",
    price: "$6.50",
    desc: "Ceremonial-grade Japanese matcha with oat milk. Earthy and refreshing.",
    image: "/assets/generated/cold-brew.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Sparkling Espresso Tonic",
    price: "$5.50",
    desc: "Double shot over chilled tonic water with a citrus twist. Effervescent.",
    image: "/assets/generated/cold-brew.dim_600x400.jpg",
    badge: "Seasonal",
  },
];

const snackItems = [
  {
    name: "Butter Croissant",
    price: "$4.25",
    desc: "Flaky, buttery, and baked fresh each morning. The ultimate morning treat.",
    image: "/assets/generated/snack-item.dim_600x400.jpg",
    badge: "Freshly Baked",
  },
  {
    name: "Avocado Toast",
    price: "$9.50",
    desc: "Sourdough, whipped avocado, cherry tomato, microgreens, lemon zest.",
    image: "/assets/generated/snack-item.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Granola Yogurt Bowl",
    price: "$7.00",
    desc: "Greek yogurt, house-made granola, seasonal berries, honey drizzle.",
    image: "/assets/generated/snack-item.dim_600x400.jpg",
    badge: "",
  },
  {
    name: "Smoked Salmon Bagel",
    price: "$11.00",
    desc: "Cream cheese, capers, red onion, dill on a toasted everything bagel.",
    image: "/assets/generated/snack-item.dim_600x400.jpg",
    badge: "Chef's Pick",
  },
];

const dessertItems = [
  {
    name: "Chocolate Lava Cake",
    price: "$7.50",
    desc: "Warm dark chocolate cake, molten center, raspberry coulis, powdered sugar.",
    image: "/assets/generated/dessert-item.dim_600x400.jpg",
    badge: "Chef's Pick",
  },
  {
    name: "Tiramisu",
    price: "$7.00",
    desc: "Espresso-soaked ladyfingers, mascarpone cream, cocoa. Classic Italian perfection.",
    image: "/assets/generated/dessert-item.dim_600x400.jpg",
    badge: "Bestseller",
  },
  {
    name: "Seasonal Tart",
    price: "$6.50",
    desc: "Buttery pastry shell with seasonal fruit curd and a marzipan glaze.",
    image: "/assets/generated/dessert-item.dim_600x400.jpg",
    badge: "Seasonal",
  },
  {
    name: "Banana Bread Slice",
    price: "$4.50",
    desc: "Moist, walnut-studded banana bread with honey butter on the side.",
    image: "/assets/generated/dessert-item.dim_600x400.jpg",
    badge: "",
  },
];

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  image: string;
  badge: string;
};

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
          data-ocid={`menu.item.${i + 1}`}
        >
          <div className="relative h-44 overflow-hidden">
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
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display text-base font-semibold text-foreground">
                {item.name}
              </h3>
              <span className="text-primary font-bold text-sm shrink-0">
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
  );
}

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-60 md:h-72 flex items-end pb-10 overflow-hidden pt-20"
        style={{
          backgroundImage:
            "url('/assets/generated/coffee-menu.dim_800x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-espresso/65" />
        <div className="relative z-10 container mx-auto px-6">
          <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
            Taste Our Craft
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="coffee">
            <TabsList
              className="bg-secondary flex-wrap h-auto gap-1 p-1.5"
              data-ocid="menu.tab"
            >
              <TabsTrigger
                value="coffee"
                className="font-semibold"
                data-ocid="menu.tab"
              >
                ☕ Coffee
              </TabsTrigger>
              <TabsTrigger
                value="cold"
                className="font-semibold"
                data-ocid="menu.tab"
              >
                🧊 Cold Beverages
              </TabsTrigger>
              <TabsTrigger
                value="snacks"
                className="font-semibold"
                data-ocid="menu.tab"
              >
                🥐 Snacks
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="font-semibold"
                data-ocid="menu.tab"
              >
                🍰 Desserts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="coffee">
              <MenuGrid items={coffeeItems} />
            </TabsContent>
            <TabsContent value="cold">
              <MenuGrid items={coldItems} />
            </TabsContent>
            <TabsContent value="snacks">
              <MenuGrid items={snackItems} />
            </TabsContent>
            <TabsContent value="desserts">
              <MenuGrid items={dessertItems} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
