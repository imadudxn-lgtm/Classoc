export const SALON = {
  name: "Head Partners",
  phoneDisplay: "01784 255267",
  phoneHref: "tel:01784255267",
  address: "45 Church Rd, Ashford TW15 2TY",
  instagram: "https://www.instagram.com/headpartners/",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.2736733221434!2d-0.43577712338148383!3d51.43478957179611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673fece886b63%3A0x33280f6879668ef4!2s45%20Church%20Rd%2C%20Ashford%20TW15%202TY!5e0!3m2!1sen!2suk!4v1719047200000!5m2!1sen!2suk",
  mapsLink: "https://maps.app.goo.gl/ChIJY2uIzv5zdkgR9I5meWgPKDM",
} as const

export const HOURS = [
  { day: "Tuesday – Wednesday", time: "8:30 AM – 4:30 PM" },
  { day: "Thursday", time: "8:30 AM – 7:00 PM" },
  { day: "Friday – Saturday", time: "8:30 AM – 4:30 PM" },
  { day: "Sunday – Monday", time: "Closed" },
] as const

export type Service = {
  name: string
  duration: string
  price: string
}

export type ServiceCategory = {
  id: string
  label: string
  blurb: string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "styling",
    label: "Cutting & Styling",
    blurb: "Expert cuts and professional styling tailored entirely to your look.",
    services: [
      { name: "Ladies' Cut & Blow Dry", duration: "45 mins", price: "£45" },
      { name: "Blow Dry & Style", duration: "30 mins", price: "£30" },
      { name: "Wet Haircut", duration: "30 mins", price: "£35" },
      { name: "Gentlemen's Haircut", duration: "25 mins", price: "£25" },
      { name: "Children's Haircut", duration: "20 mins", price: "£15" },
    ],
  },
  {
    id: "coloring",
    label: "Hair Colouring",
    blurb: "Vibrant all-over shades and root maintenance using premium formulas.",
    services: [
      { name: "Full Head Permanent Colour", duration: "90 mins", price: "£75" },
      { name: "Root Colour Touch-Up", duration: "60 mins", price: "£45" },
      { name: "Glossing & Toner Treatment", duration: "45 mins", price: "£35" },
      { name: "Regrowth Tint", duration: "60 mins", price: "£50" },
    ],
  },
  {
    id: "highlights",
    label: "Highlights & Technical",
    blurb: "Dimensional lightening, creative balayage, and traditional perms.",
    services: [
      { name: "Full Head Highlights", duration: "120 mins", price: "£110" },
      { name: "Half Head Highlights", duration: "90 mins", price: "£85" },
      { name: "T-Section Highlights", duration: "75 mins", price: "£60" },
      { name: "Balayage Style", duration: "150 mins", price: "From £120" },
      { name: "Traditional Hair Perm", duration: "90 mins", price: "From £65" },
    ],
  },
]

export const GALLERY = [
  { src: "/gallery-1.jpg", alt: "Salon interior layout" },
  { src: "/gallery-2.jpg", alt: "Professional styling session" },
  { src: "/gallery-3.jpg", alt: "Finished style result" },
]

export const REVIEWS = [
  {
    name: "Sarah M.",
    text: "Fantastic experience at Head Partners. Professional, friendly, and they knew exactly what to do with my highlights. I love my hair so much!",
  },
  {
    name: "James L.",
    text: "Had a great restyle haircut here. The team takes excellent care, the prices are very reasonable, and the final look was crisp and perfectly neat.",
  },
  {
    name: "Victoria G.",
    text: "The stylist was incredibly precise and did exactly what I requested for my cut and blow-dry. Brilliant customer care and pristine service!",
  },
  {
    name: "Emma D.",
    text: "I tried Head Partners for a root touch-up and tint, and I'm so pleased with the vibrant results. Highly recommend this local gem!",
  },
]

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
]