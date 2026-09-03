import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ShoppingCart, User } from "lucide-react";

import logo from "@/assets/raghuveer-logo.png.asset.json";
import heroNamkeen from "@/assets/hero-namkeen.jpg";
import gathiya from "@/assets/gathiya.jpg";
import ladduBox from "@/assets/laddu-box.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import sev from "@/assets/sev.jpg";
import jalebi from "@/assets/jalebi.jpg";
import rasgulla from "@/assets/rasgulla.jpg";
import soanPapdi from "@/assets/soan-papdi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghuveer Mithaiyan — Mithaas, since 1970 | Amravati" },
      {
        name: "description",
        content:
          "Preserving Amravati's sweetest traditions for over 50 years. Browse our menu of sweets, namkeen and festive gift boxes.",
      },
      { property: "og:title", content: "Raghuveer Mithaiyan — Mithaas, since 1970" },
      {
        property: "og:description",
        content:
          "Traditional sweets and fresh namkeen from Amravati. Explore the full menu and order on WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const navLinks = ["Home", "Sweets", "Namkeen", "Gifting", "Our Story"];

const quickPicks = [
  { name: "Gathiya", price: "₹29.00", img: gathiya },
  { name: "Assorted Laddus", price: "₹69.00", img: ladduBox },
];

const menu = [
  {
    heading: "Mithai",
    items: [
      { name: "Kaju Katli", desc: "Cashew, ghee, silver varq", price: "₹899 / kg", img: kajuKatli },
      { name: "Jalebi", desc: "Fried fresh, dipped in saffron syrup", price: "₹280 / kg", img: jalebi },
      { name: "Rasgulla", desc: "Soft chenna in light sugar syrup", price: "₹320 / kg", img: rasgulla },
      { name: "Soan Papdi", desc: "Flaky, cardamom scented", price: "₹360 / kg", img: soanPapdi },
    ],
  },
  {
    heading: "Namkeen",
    items: [
      { name: "Amravati Mixture", desc: "Puffed rice, sev, peanuts, curry leaf", price: "₹240 / kg", img: heroNamkeen },
      { name: "Barik Sev", desc: "Thin, crisp, mildly spiced", price: "₹220 / kg", img: sev },
      { name: "Gathiya", desc: "Besan classic, soft centre", price: "₹210 / kg", img: gathiya },
      { name: "Gift Box of Laddus", desc: "Twelve pieces, festive packing", price: "₹640 / box", img: ladduBox },
    ],
  },
];

const marquee = [
  "Traditional Recipes",
  "Quality Ingredients",
  "Trusted for 50+ Years",
  "Amravati's Favorite",
  "Raghuveer Sweets & Namkeen",
  "Order Now",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <p className="bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">
        FREE Delivery across Amravati on orders above ₹1000! *T&amp;C Apply
      </p>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-3">
          <a href="#top" className="shrink-0">
            <img src={logo.url} alt="Raghuveer Mithaiyan logo" className="h-14 w-auto" />
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={link === "Home" ? "#top" : "#menu"}
                className={`text-lg transition-colors hover:text-primary ${
                  i === 0 ? "text-primary" : "text-foreground"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-5 md:ml-0">
            <User className="h-6 w-6 stroke-[1.25] transition-transform hover:scale-110" />
            <ShoppingCart className="h-6 w-6 stroke-[1.25] transition-transform hover:scale-110" />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-12 md:grid-cols-2 md:py-16">
            <div className="animate-rise">
              <h1 className="font-display text-5xl leading-tight font-bold tracking-tight md:text-7xl">
                Mithaas, since 1970
              </h1>
              <p className="mt-5 max-w-md text-lg text-muted-foreground md:text-xl">
                Preserving Amravati's sweetest traditions for over 50 years.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-md bg-primary px-6 py-3.5 text-lg font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Explore the menu
                </a>
                <a
                  href="#menu"
                  className="rounded-md bg-secondary px-6 py-3.5 text-lg font-semibold text-secondary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroNamkeen}
                alt="Plate of Amravati mixture namkeen"
                width={1200}
                height={1008}
                className="animate-float mx-auto w-full max-w-xl object-contain md:-mr-16 md:max-w-none"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-band">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-6 py-4 text-lg">
            <span className="flex items-center gap-2">👍 Best Sellers</span>
            <span className="flex items-center gap-2">📍 Local Delights</span>
            <span className="flex items-center gap-2">🎁 Specialty Gifting</span>
          </div>
        </section>

        <section className="border-b border-border/60 bg-card">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-10 px-6 py-4">
            {quickPicks.map((p) => (
              <div key={p.name} className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-16 w-16 rounded-md border border-border object-cover"
                />
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-muted-foreground">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-b border-border/60 py-3">
          <div className="animate-marquee flex w-max gap-6 whitespace-nowrap text-lg">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((t, i) => (
              <span key={i}>~&nbsp;&nbsp;{t}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center py-4 text-muted-foreground">
          <span>scroll down</span>
          <ChevronDown className="animate-bounce-down h-5 w-5" />
        </div>

        <section id="menu" className="mx-auto max-w-7xl px-6 pt-6 pb-20">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Our Menu</h2>
          <p className="mt-3 max-w-lg text-lg text-muted-foreground">
            Made fresh every morning at our Amravati kitchen. Prices are indicative.
          </p>

          {menu.map((group) => (
            <div key={group.heading} className="mt-12">
              <h3 className="font-display text-2xl font-bold text-primary">{group.heading}</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="card-lift overflow-hidden rounded-lg border border-border bg-card"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      width={512}
                      height={512}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-display text-xl font-bold">{item.name}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                      <p className="mt-3 font-semibold text-primary">{item.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-border/60 bg-band">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-muted-foreground">
          <img src={logo.url} alt="Raghuveer Mithaiyan" className="h-12 w-auto" />
          <p>Rajapeth, Amravati · Open 9am – 9pm daily</p>
        </div>
      </footer>
    </div>
  );
}
