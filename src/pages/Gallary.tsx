import { useState } from "react";

const galleryImages = [
  { id: 1, category: "food", title: "Signature Dish", description: "Our chef's special creation" },
  { id: 2, category: "food", title: "Appetizer", description: "Fresh starter plate" },
  { id: 3, category: "food", title: "Dessert", description: "Sweet finale" },
  { id: 4, category: "interior", title: "Main Dining Area", description: "Cozy atmosphere" },
  { id: 5, category: "interior", title: "Bar Section", description: "Enjoy drinks here" },
  { id: 6, category: "interior", title: "Outdoor Seating", description: "Al fresco dining" },
  { id: 7, category: "events", title: "Private Party", description: "Celebrate with us" },
  { id: 8, category: "events", title: "Corporate Event", description: "Business dinners" },
  { id: 9, category: "events", title: "Date Night", description: "Romantic setting" },
  { id: 10, category: "food", title: "Pasta Special", description: "House-made pasta" },
  { id: 11, category: "food", title: "Grilled Meats", description: "Premium cuts" },
  { id: 12, category: "food", title: "Seafood Platter", description: "Fresh catches" },
];

const Gallary = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "food", "interior", "events"];

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Gallery Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">A glimpse into our culinary world</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
          <p className="text-xl text-amber-100 mb-8">Visit us in person to experience the full ambiance</p>
          <a 
            href="/booking"
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book a Table
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallary;
