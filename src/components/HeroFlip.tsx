import ExploreSection, { type ExploreContent } from "@/components/ui/Explore";
import ExploreStack from "@/components/ui/ExploreStack";

const sections: ExploreContent[] = [
  {
    eyebrow: "The Stay",
    title: "Property and Rooms",
    description: "Aluva is a serene riverside town in Ernakulam, Kerala...",
    content:
      "Step into your private A/C luxury room, where elegance meets comfort. Thoughtfully designed interiors, plush bedding, and modern amenities ensure a stay that feels just like home — only better.",
    features: [
      {
        icon: "building",
        text: "2 Floor Luxury Villa with ample car parking space",
      },
      { icon: "bed", text: "4 spacious bedrooms" },
      {
        icon: "snowflake",
        text: "Fully Air-Conditioned – Stay cool and relaxed, no matter the weather.",
      },
      { icon: "sofa", text: "Large living spaces on both floors" },
      { icon: "trees", text: "Large outdoor area" },
      { icon: "bath", text: "5 Washrooms" },
      { icon: "sunset", text: "2 Large balconies" },
    ],
    mainImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629440/WhatsApp_Image_2025-08-23_at_21.25.30_omwsxr.jpg",
    subImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
  },
  {
    eyebrow: "The Kitchen",
    title: "Fully-Equipped Modern Kitchen",
    description: "Our homestay offers a spacious, modern kitchen",
    content:
      "Whether you want to cook a full meal or just make a quick snack, our kitchen has everything you need for a pleasant stay. Enjoy a clean, organized space with all essential appliances and utensils at your fingertips.",
    features: [
      { icon: "flame", text: "Gas stove for easy cooking" },
      { icon: "utensils", text: "Plates, glasses, and cutlery" },
      { icon: "microwave", text: "Electric kettle and microwave" },
      { icon: "refrigerator", text: "Refrigerator to store your groceries" },
      { icon: "chefHat", text: "Spacious countertops for food prep" },
      { icon: "boxes", text: "Ample storage cabinets" },
    ],
    mainImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629433/WhatsApp_Image_2025-08-23_at_21.24.39_kmrl8g.jpg",
    subImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.34_csahow.jpg",
  },
  {
    eyebrow: "The Living Space",
    title: "Spacious & Cozy Living Room",
    description:
      "Relax and unwind in our airy living room, designed for comfort and togetherness.",
    content:
      "Our living room is perfect for socializing with family or friends, enjoying a quiet evening, or watching your favorite shows. The space is bright, inviting, and thoughtfully furnished for a homely experience.",
    features: [
      { icon: "sofa", text: "Comfortable sofas and armchairs" },
      { icon: "coffee", text: "Coffee table and side tables" },
      { icon: "tv", text: "Flat-screen TV with streaming options" },
      { icon: "wifi", text: "High-speed Wi-Fi access" },
      { icon: "book", text: "Bookshelf with a variety of books" },
      { icon: "lamp", text: "Decorative lighting for ambiance" },
      { icon: "maximize", text: "Spacious layout for easy movement" },
      { icon: "sun", text: "Large windows with natural light" },
    ],
    mainImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.18_1_ww4zye.jpg",
    subImage:
      "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.26.15_1_lsmnn1.jpg",
  },
];

export default function ExplorePage() {
  return (
    <section id="about" className="scroll-mt-16 md:scroll-mt-24">
      {/* Mobile: a pinned 100vh panel can't fit this content, so keep the
          classic stacked sections there */}
      <div className="md:hidden">
        {sections.map((section, i) => (
          <ExploreSection
            key={section.title}
            {...section}
            reverse={i % 2 === 1}
            muted={i % 2 === 1}
          />
        ))}
      </div>

      {/* Desktop: one pinned section — scrolling scrubs through the panels */}
      <div className="hidden md:block">
        <ExploreStack sections={sections} />
      </div>
    </section>
  );
}
