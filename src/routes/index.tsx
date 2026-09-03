import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Menu, ShoppingBag, User } from "lucide-react";

import logo from "@/assets/raghuveer-logo.png.asset.json";
import heroNamkeen from "@/assets/hero-namkeen.jpg";
import gathiya from "@/assets/gathiya.jpg";
import ladduBox from "@/assets/laddu-box.jpg";
import kajuKatli from "@/assets/kaju-katli.jpg";
import sev from "@/assets/sev.jpg";
import jalebi from "@/assets/jalebi.jpg";
import rasgulla from "@/assets/rasgulla.jpg";
import soanPapdi from "@/assets/soan-papdi.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghuveer Mithaiyan — Mithaas, since 1970 | Amravati" },
      {
        name: "description",
        content:
          "Amravati's house of mithai and namkeen since 1970. Slow-cooked in ghee, made fresh each morning. Browse the full menu and order today.",
      },
      { property: "og:title", content: "Raghuveer Mithaiyan — Mithaas, since 1970" },
      {
        property: "og:description",
        content:
          "Amravati's house of mithai and namkeen since 1970. Slow-cooked in ghee, made fresh each morning.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Sweets", href: "#mithai" },
  { label: "Namkeen", href: "#namkeen" },
  { label: "Gifting", href: "#gifting" },
  { label: "Our Story", href: "#story" },
];

const stats = [
  { value: "1970", label: "Established" },
  { value: "54", label: "Years of mithaas" },
  { value: "40+", label: "Recipes on counter" },
  { value: "100%", label: "Desi ghee" },
];

const mithai = [
  {
    name: "Kaju Katli",
    desc: "Whole cashew, slow-reduced, finished with edible silver varq.",
    price: "₹899",
    unit: "per kg",
    img: kajuKatli,
  },
  {
    name: "Jalebi",
    desc: "Fried to order each evening, soaked in saffron syrup.",
    price: "₹280",
    unit: "per kg",
    img: jalebi,
  },
  {
    name: "Rasgulla",
    desc: "Hand-kneaded chenna simmered in a light cardamom syrup.",
    price: "₹320",
    unit: "per kg",
    img: rasgulla,
  },
  {
    name: "Soan Papdi",
    desc: "Pulled into fine threads by hand, layered with pistachio.",
    price: "₹360",
    unit: "per kg",
    img: soanPapdi,
  },
];

const namkeen = [
  {
    name: "Amravati Mixture",
    desc: "Puffed rice, sev, peanuts and fried curry leaf — the house blend.",
    price: "₹240",
    unit: "per kg",
    img: heroNamkeen,
  },
  {
    name: "Barik Sev",
    desc: "Fine besan strands, fried in small batches, lightly spiced.",
    price: "₹220",
    unit: "per kg",
    img: sev,
  },
  {
    name: "Gathiya",
    desc: "Thick, soft-centred besan sticks with ajwain and green chilli.",
    price: "₹210",
    unit: "per kg",
    img: gathiya,
  },
];

const marquee = [
  "Slow-cooked in desi ghee",
  "Made fresh every morning",
  "Trusted since 1970",
  "Amravati's own mithai ghar",
  "Festive gifting, hand-packed",
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <p className="bg-ink px-4 py-2.5 text-center text-[0.7rem] font-medium tracking-[0.18em] text-brass-soft uppercase">
        Complimentary delivery across Amravati on orders above ₹1000
      </p>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[86rem] items-center gap-10 px-6 py-3 lg:px-10">
          <a href="#top" className="shrink-0">
            <img src={logo.url} alt="Raghuveer Mithaiyan" className="h-14 w-auto" />
          </a>
          <nav className="hidden flex-1 items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-[0.78rem] font-medium tracking-[0.16em] uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <a
              href="#menu"
              className="btn-solid hidden rounded-[2px] px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase sm:inline-block"
            >
              Order now
            </a>
            <User className="h-5 w-5 stroke-[1.4] transition-colors hover:text-primary" />
            <ShoppingBag className="h-5 w-5 stroke-[1.4] transition-colors hover:text-primary" />
            <Menu className="h-5 w-5 stroke-[1.4] lg:hidden" />
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pt-24 lg:pb-28">
            <div className="animate-rise">
              <p className="kicker">Amravati · Est. 1970</p>
              <div className="hairline mt-5 w-24" />
              <h1 className="font-display mt-7 text-[3.4rem] leading-[0.94] font-semibold tracking-[-0.03em] text-ink md:text-[5.2rem]">
                Mithaas,
                <br />
                <span className="text-primary italic">since 1970</span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Four generations at one counter in Rajapeth. Copper kadhai, desi ghee,
                and the same recipes we started with — nothing has been rushed since.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="btn-solid rounded-[2px] px-8 py-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase"
                >
                  Explore the menu
                </a>
                <a
                  href="#gifting"
                  className="btn-outline rounded-[2px] px-8 py-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase"
                >
                  Festive gifting
                </a>
              </div>
            </div>

            <div className="animate-rise relative [animation-delay:180ms]">
              <div className="animate-float relative">
                <img
                  src={heroNamkeen}
                  alt="Brass thali of Amravati mixture namkeen on a walnut table"
                  width={1408}
                  height={1200}
                  className="w-full rounded-[2px] object-cover shadow-[0_50px_100px_-50px_oklch(0.16_0.016_52/0.7)]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2px] ring-1 ring-brass/30 ring-inset" />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden bg-ink px-7 py-5 text-center sm:block">
                <p className="font-display text-3xl font-semibold text-brass-soft">54</p>
                <p className="mt-1 text-[0.62rem] tracking-[0.2em] text-brass uppercase">
                  Years on
                  <br />
                  the counter
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-[86rem] flex-col items-center gap-1 px-6 pb-10 text-muted-foreground">
            <span className="text-[0.62rem] tracking-[0.24em] uppercase">Scroll</span>
            <ChevronDown className="animate-bounce-down h-4 w-4" />
          </div>
        </section>

        {/* ---------- Stats band ---------- */}
        <section className="border-y border-border bg-band">
          <div className="mx-auto grid max-w-[86rem] grid-cols-2 divide-x divide-border px-6 lg:grid-cols-4 lg:px-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal px-6 py-9 text-center"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="font-display text-4xl font-semibold text-primary">{s.value}</p>
                <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Menu ---------- */}
        <section id="menu" className="mx-auto max-w-[86rem] px-6 py-24 lg:px-10">
          <div className="reveal max-w-2xl">
            <p className="kicker">The counter</p>
            <h2 className="font-display mt-5 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.025em] text-ink md:text-[3.6rem]">
              What we make each morning
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Everything below is prepared the same day, in small batches. Weights are
              cut fresh at the counter; boxes are packed while you wait.
            </p>
          </div>

          <div id="mithai" className="mt-20 scroll-mt-28">
            <div className="reveal flex items-baseline gap-6">
              <h3 className="font-display text-2xl font-semibold tracking-tight">Mithai</h3>
              <span className="hairline flex-1" />
              <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                01
              </span>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {mithai.map((item, i) => (
                <ItemCard key={item.name} item={item} delay={i * 90} />
              ))}
            </div>
          </div>

          <div id="namkeen" className="mt-24 scroll-mt-28">
            <div className="reveal flex items-baseline gap-6">
              <h3 className="font-display text-2xl font-semibold tracking-tight">Namkeen</h3>
              <span className="hairline flex-1" />
              <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                02
              </span>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {namkeen.map((item, i) => (
                <ItemCard key={item.name} item={item} delay={i * 90} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Marquee ---------- */}
        <div className="overflow-hidden border-y border-border bg-ink py-4">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-[0.7rem] tracking-[0.24em] text-brass-soft uppercase">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-brass">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Gifting ---------- */}
        <section id="gifting" className="mx-auto max-w-[86rem] scroll-mt-28 px-6 py-24 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal frame rounded-[2px]">
              <img
                src={ladduBox}
                alt="Deep red festive gift box filled with assorted laddus"
                width={912}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <p className="kicker">Gifting</p>
              <h2 className="font-display mt-5 text-[2.4rem] leading-[1.04] font-semibold tracking-[-0.025em] text-ink md:text-[3.2rem]">
                Boxes worth handing over
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Diwali, weddings, corporate hampers — packed in lacquered red and gold,
                sealed the morning they leave the shop. Custom assortments from 12 pieces
                upward, with your name on the sleeve.
              </p>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-6 border-t border-border pt-8">
                {[
                  ["From", "₹640 / box"],
                  ["Lead time", "24 hours"],
                  ["Bulk orders", "50+ boxes"],
                  ["Packing", "Hand-sealed"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="font-display mt-1.5 text-xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- Story ---------- */}
        <section id="story" className="scroll-mt-28 border-y border-border bg-band">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <p className="kicker reveal">Our story</p>
            <blockquote className="reveal font-display mt-8 text-[1.9rem] leading-[1.25] font-normal tracking-[-0.02em] text-ink italic md:text-[2.6rem]">
              “Ek hi kadhai, ek hi nuskha, chausath saal se. Jo swaad dadaji ne banaya,
              wahi aaj bhi counter par milta hai.”
            </blockquote>
            <div className="reveal mt-10 flex items-center justify-center gap-4">
              <span className="hairline w-12 rotate-180" />
              <p className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                The Raghuveer family · Rajapeth, Amravati
              </p>
              <span className="hairline w-12" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-brass-soft">
        <div className="mx-auto grid max-w-[86rem] gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
          <div>
            <img src={logo.url} alt="Raghuveer Mithaiyan" className="h-16 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-brass-soft/70">
              Sweets and namkeen made fresh in Amravati since 1970.
            </p>
          </div>
          <div>
            <p className="text-[0.62rem] tracking-[0.2em] text-brass uppercase">Visit</p>
            <p className="mt-4 text-sm leading-relaxed text-brass-soft/80">
              Rajapeth Main Road
              <br />
              Amravati, Maharashtra 444601
              <br />
              Open daily, 9:00 am – 9:00 pm
            </p>
          </div>
          <div>
            <p className="text-[0.62rem] tracking-[0.2em] text-brass uppercase">Menu</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.slice(1).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-brass-soft/80 transition-colors hover:text-brass-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brass/20">
          <p className="mx-auto max-w-[86rem] px-6 py-6 text-[0.65rem] tracking-[0.16em] text-brass-soft/50 uppercase lg:px-10">
            © {new Date().getFullYear()} Raghuveer Mithaiyan
          </p>
        </div>
      </footer>
    </div>
  );
}

type Item = {
  name: string;
  desc: string;
  price: string;
  unit: string;
  img: string;
};

function ItemCard({ item, delay }: { item: Item; delay: number }) {
  return (
    <article
      className="reveal frame rounded-[2px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          width={912}
          height={912}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h4 className="font-display text-xl font-semibold tracking-tight">{item.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
          <span className="font-display text-lg font-semibold text-primary">{item.price}</span>
          <span className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
            {item.unit}
          </span>
        </div>
      </div>
    </article>
  );
}
