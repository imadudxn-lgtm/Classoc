import { Heart, Sparkles, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Spotlessly clean",
    text: "A bright, hygienic styling environment with clean, sanitized tools for every single client.",
  },
  {
    icon: Heart,
    title: "Friendly experts",
    text: "A warm, experienced team that listens carefully and treats your hair with expert care.",
  },
  {
    icon: Sparkles,
    title: "Premium products",
    text: "Quality professional hair colors, styling products, and formulas that leave hair healthy and vibrant.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-xl bg-muted h-[560px] relative">
            <img
              src="/gallery-2.jpg"
              alt="Inside Head Partners — a professional styling session focusing on premium color application and client care"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Your local hair salon in the heart of Ashford
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Head Partners we&apos;ve built a calm, welcoming space where you can
            relax and leave feeling your absolute best. Whether you&apos;re looking for a quick trim, 
            a dramatic restyle, or creative technical coloring, our team takes the time to get
            every single detail just right for your unique style.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Walk-ins are always welcome, and we&apos;re proud of the loyal community of
            clients who keep trusting us with their look.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-5 shadow-sm">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}