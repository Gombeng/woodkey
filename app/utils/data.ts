import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsWhatsapp,
} from "react-icons/bs";
import {
  FaBed,
  FaChair,
  FaCouch,
  FaToilet,
  FaTv,
  FaHammer,
  FaHandHoldingHeart,
  FaStar,
  FaTree,
  FaTruckFast,
  FaWrench,
} from "react-icons/fa6";
import { GiTable } from "react-icons/gi";

export const categoriesOfFurniture = [
  {
    label: "Beds",
    icon: FaBed,
    customer: "Jonathan Irawan",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "Experience restful sleep with our minimalist bed frame, crafted from solid teak wood. Its clean design supports posture and adds natural warmth to any bedroom setting.",
      "Detailed with traditional joinery, this bed combines durability and elegance. It suits both modern and rustic interiors, offering comfort that lasts through seasons of use.",
    ],
  },
  {
    label: "Chairs",
    icon: FaChair,
    customer: "Ayu Lestari",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "Our wooden chairs blend ergonomic design with hand-finished craftsmanship. Lightweight yet sturdy, they’re perfect for both dining rooms and relaxed living spaces.",
      "Made from eco-sourced hardwood, these chairs are stackable and feature smooth edges for comfort. Ideal for everyday use while enhancing your home’s aesthetic.",
    ],
  },
  {
    label: "Sofas",
    icon: FaCouch,
    customer: "David Gunawan",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "This 3-seater sofa offers plush cushions and a solid frame, designed for maximum comfort. It’s perfect for cozy evenings and welcoming guests in style.",
      "Built with kiln-dried wood and wrapped in breathable woven fabric, the sofa is both luxurious and practical. Its neutral tones suit any living room decor.",
    ],
  },
  {
    label: "Tables",
    icon: GiTable,
    customer: "Nina Sasmita",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "Our handcrafted table features a spacious reclaimed wood surface and clean industrial lines. It’s ideal for family meals, work sessions, or stylish entertaining.",
      "Finished with a natural sealant, the table resists daily wear while maintaining its unique character. A perfect centerpiece for modern dining areas.",
    ],
  },
  {
    label: "Bathroom",
    icon: FaToilet,
    customer: "Farhan Mahendra",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "This wooden vanity offers clean aesthetics and smart storage. Its compact form suits modern bathrooms while retaining a warm, earthy feel.",
      "Moisture-resistant finishes and soft-close drawers make it both beautiful and practical. Perfect for keeping your essentials organized with a touch of natural charm.",
    ],
  },
  {
    label: "TV Stands",
    icon: FaTv,
    customer: "Rizky Alfiansyah",
    // image: "https://source.unsplash.com/800x600/?wood,bed",
    descriptions: [
      "Our TV stand is built for modern homes with minimalist style and cable-friendly design. It keeps your entertainment setup clean and organized.",
      "Crafted from hardwood with spacious drawers and sleek legs, it offers both function and form. Ideal for living rooms that balance style and simplicity.",
    ],
  },
];

export const ourAdvantages = [
  {
    icon: FaWrench,
    title: "Modern Equipment",
    desc: "We implement the most daring design ideas using modern equipment.",
  },
  {
    icon: FaTree,
    title: "Sustainable Wood",
    desc: "We source high-quality, eco-friendly timber from certified forests.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Crafted by Hand",
    desc: "Every piece is handcrafted with passion by skilled artisans.",
  },
  {
    icon: FaTruckFast,
    title: "Fast & Safe Delivery",
    desc: "Get your furniture delivered on time with secure packaging.",
  },
  {
    icon: FaStar,
    title: "Premium Finishes",
    desc: "Smooth, durable finishes that bring out the natural beauty of wood.",
  },
  {
    icon: FaHammer,
    title: "Custom Orders",
    desc: "Tailored designs to perfectly fit your space and taste.",
  },
];

export const reviews = [
  {
    name: "Jonathan Irawan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "June 18, 2025",
    rating: 5,
    review:
      "Absolutely stunning craftsmanship! The materials used feel premium and the design fits perfectly with my minimalist home. Highly recommend their custom furniture service!",
  },
  {
    name: "Ayu Lestari",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "May 30, 2025",
    rating: 4,
    review:
      "Excellent service from start to finish. The team was communicative, helpful with customization, and delivered a flawless final product. Worth every penny.",
  },
  {
    name: "Rizky Alfiansyah",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "April 12, 2025",
    rating: 5,
    review:
      "The best wooden furniture I’ve ever bought. Built strong and detailed with care. The delivery was also right on time. Great job and thank you!",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Works", to: "/works" },
  { label: "Contacts", to: "/contacts" },
];

export const socialLinks = [
  { icon: BsInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: BsTelegram, label: "Telegram", href: "https://telegram.org" },
  { icon: BsWhatsapp, label: "WhatsApp", href: "https://wa.me/6281234567890" },
  { icon: BsFacebook, label: "Facebook", href: "https://facebook.com" },
];

export const faqIData = [
  {
    value: "a",
    title: "What materials do you use?",
    text: "We use sustainably sourced wood like teak, oak, and mahogany. All finishes are eco-friendly and built to last.",
  },
  {
    value: "b",
    title: "Can I request custom sizes?",
    text: "Absolutely! We specialize in made-to-order furniture tailored to your space, preferences, and style.",
  },
  {
    value: "c",
    title: "Do you offer delivery services?",
    text: "Yes, we offer nationwide delivery with professional handling and optional installation.",
  },
  {
    value: "d",
    title: "How long does production take?",
    text: "Production typically takes 10–21 business days depending on the complexity and quantity of your order.",
  },
  {
    value: "e",
    title: "Can I see samples of your previous work?",
    text: "Yes! Please visit our portfolio section to view recent projects and client testimonials.",
  },
];
