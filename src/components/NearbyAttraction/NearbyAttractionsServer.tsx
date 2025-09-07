import NearbyAttractionsClient from "./NearbyAttractionsClient";

const attractions = [
  {
    title: "Areekkal Waterfalls – Scenic Waterfall near Piravom, Kerala",
    distance: "2 km",
    description:
      "Areekkal (Areeckal) Waterfalls, located near Piravom in Ernakulam district, is one of the most beautiful waterfalls in Kerala. Surrounded by lush greenery and countryside charm, this perennial waterfall is a popular weekend getaway for nature lovers, photographers, and adventure seekers visiting Kochi and its nearby attractions.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757254939/areekalwaterfalls_ebce17.jpg",
    alt: "Areekkal Waterfalls near Piravom, Kerala",
  },
  {
    title: "Cherai Beach – Famous Beach near Kochi",
    distance: "20 km",
    description:
      "Cherai Beach, located on Vypin Island near Kochi, is a perfect blend of sea and backwaters. Known for its golden sand and calm waters, it is one of the best beaches in Kerala for swimming, sunbathing, and spotting dolphins. A must-visit for travelers seeking relaxation and scenic sunsets.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757255353/cherai-Beach-01_znepkd.jpg",
    alt: "Cherai Beach with golden sand near Kochi",
  },
  {
    title: "Wonderla Amusement Park",
    distance: "17 km",
    description:
      "Wonderla Amusement Park in Kochi, India, offers a mix of land and water attractions, with over 55 rides including high-adrenaline roller coasters and family-friendly water slides, suitable for visitors of all ages. The park is generally open year-round, with typical hours from 11:00 AM to 6:00 PM on weekdays and 11:00 AM to 7:00 PM on weekends.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757256813/wonderla_n3kb9f.avif",
    alt: "Wonderla amusement park kochi, Kerala",
  },
  {
    title: "Athirappilly Waterfalls – The Niagara of India",
    distance: "53 km",
    description:
      "Athirappilly Waterfalls, Kerala’s largest waterfall, cascades from a height of 80 feet and is often called the 'Niagara of India.' Surrounded by the Sholayar ranges and dense forests, it is a paradise for nature enthusiasts, birdwatchers, and filmmakers. A top attraction near Kochi for day trips.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757255491/athirappally_waterfalls_kf7eup.avif",
    alt: "Athirappilly Waterfalls, Kerala",
  },
  {
    title: "Kochi – The Queen of the Arabian Sea",
    distance: "3 km",
    description:
      "Kochi (Cochin), a vibrant port city in Kerala, is famous for its colonial heritage, Chinese fishing nets, Mattancherry Palace, and Fort Kochi. A hub of culture, history, and modern development, Kochi is a must-visit destination offering a mix of tradition and cosmopolitan lifestyle.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757256400/Kochi_climate_qf5dxz.jpg",
    alt: "Scenic view of Kochi city and fishing nets",
  },
  {
    title: "PQ Exotic Birds Park – Family Attraction",
    distance: "14 km",
    description:
      "PQ Exotic Birds Park is a popular tourist attraction near Kochi, showcasing rare and exotic species of birds in a natural environment. Ideal for families and bird lovers, this park offers an educational and fun experience surrounded by nature.",
    image: "https://res.cloudinary.com/djdjfhkie/image/upload/v1757256311/PQ_Exotic_Birds_Park_mw1ijb.avif",
    alt: "PQ Exotic Birds Park in Kerala",
  },
];

export default function NearbyAttractionsServer() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Nearby Tourist Attractions in Kerala
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Discover the best tourist attractions near our property in Kerala,
          including waterfalls, beaches, temples, and cultural landmarks around
          Ernakulam.
        </p>

        {/* Pass data to Client Component only for animations */}
        <NearbyAttractionsClient attractions={attractions} />
      </div>
    </section>
  );
}
