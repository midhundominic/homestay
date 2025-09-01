import ExploreSection from "@/components/ui/Explore";

export default function ExplorePage() {
  return (
    <section id="about">
      {/* Normal Layout (Text Left, Images Right) */}
      <ExploreSection
        title="Relax. Refresh. Rejuvenate."
        description="Aluva is a serene riverside town in Ernakulam, Kerala..."
        content="Step into your private A/C luxury room, where elegance meets comfort. Thoughtfully designed interiors, plush bedding, and modern amenities ensure a stay that feels just like home — only better."
        features={[
          "2 Floor Villa Private Balcony/View – Enjoy scenic views and fresh air.",
          "Fully Air-Conditioned – Stay cool and relaxed, no matter the weather.",
          "High-speed Wi-Fi",
          "Spacious Interiors – Designed for both style and comfort.",
          "24/7 concierge service",
        ]}
        mainImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629440/WhatsApp_Image_2025-08-23_at_21.25.30_omwsxr.jpg"
        subImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg"
      />

      {/* Reversed Layout (Images Left, Text Right) */}
      <ExploreSection
        title="Fully-Equipped Modern Kitchen"
        description="Our homestay offers a spacious, modern kitchen"
        features={ [
          "Gas stove for easy cooking and Plates, glasses, and cutlery",
          "Electric kettle, Microwave",
          "Refrigerator to store your groceries",
          "Spacious countertops for food prep",
          "Ample storage cabinets"
        ]}
        content="Whether you want to cook a full meal or just make a quick snack, our kitchen has everything you need for a pleasant stay. Enjoy a clean, organized space with all essential appliances and utensils at your fingertips."
        mainImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629433/WhatsApp_Image_2025-08-23_at_21.24.39_kmrl8g.jpg"
        subImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.34_csahow.jpg"
        reverse
      />

      <ExploreSection
        title= "Spacious & Cozy Living Room"
        description="Relax and unwind in our airy living room, designed for comfort and togetherness."
        content= "Our living room is perfect for socializing with family or friends, enjoying a quiet evening, or watching your favorite shows. The space is bright, inviting, and thoughtfully furnished for a homely experience."
        features={ [
          "Comfortable sofas and armchairs",
          "Coffee table and side tables",
          "Flat-screen TV with streaming options",
          "High-speed Wi-Fi access",
          "Bookshelf with a variety of books",
          "Decorative lighting for ambiance",
          "Spacious layout for easy movement",
          "Large windows with natural light"
        ]}
        
        mainImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.18_1_ww4zye.jpg"
        subImage="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.26.15_1_lsmnn1.jpg"
      />
    </section>
  );
}
