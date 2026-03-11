import { useState } from "react";

const menuCategories = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

const menuItems = [
  {
    id: 1,
    category: "starters",
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, garlic, and basil",
    price: 12,
    tags: ["V", "VG"],
  },
  {
    id: 2,
    category: "starters",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with caesar dressing and croutons",
    price: 14,
    tags: ["GF"],
  },
  {
    id: 3,
    category: "starters",
    name: "Soup of the Day",
    description: "Ask your server about today's fresh soup selection",
    price: 10,
    tags: ["V", "GF"],
  },
  {
    id: 4,
    category: "mains",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with seasonal vegetables",
    price: 28,
    tags: ["GF", "DF"],
  },
  {
    id: 5,
    category: "mains",
    name: "Ribeye Steak",
    description: "12oz premium ribeye with garlic butter and fries",
    price: 35,
    tags: ["GF"],
  },
  {
    id: 6,
    category: "mains",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast with marinara and mozzarella",
    price: 24,
    tags: [],
  },
  {
    id: 7,
    category: "mains",
    name: "Vegetable Pasta",
    description: "Penne with roasted vegetables in cream sauce",
    price: 20,
    tags: ["V"],
  },
  {
    id: 8,
    category: "mains",
    name: "Lamb Chops",
    description: "Herb-crusted lamb chops with mint sauce",
    price: 32,
    tags: ["GF"],
  },
  {
    id: 9,
    category: "desserts",
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: 12,
    tags: ["V"],
  },
  {
    id: 10,
    category: "desserts",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: 14,
    tags: ["V"],
  },
  {
    id: 11,
    category: "desserts",
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 11,
    tags: ["V", "GF"],
  },
  {
    id: 12,
    category: "drinks",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons",
    price: 6,
    tags: ["V", "VG", "GF", "DF"],
  },
  {
    id: 13,
    category: "drinks",
    name: "Espresso",
    description: "Double shot espresso",
    price: 4,
    tags: ["V", "VG", "GF", "DF"],
  },
  {
    id: 14,
    category: "drinks",
    name: "House Wine",
    description: "Red or white, by the glass",
    price: 12,
    tags: ["V", "VG", "GF", "DF"],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      V: "bg-green-100 text-green-700",
      VG: "bg-green-200 text-green-800",
      GF: "bg-amber-100 text-amber-700",
      DF: "bg-blue-100 text-blue-700",
    };
    return colors[tag] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Menu Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-gray-300">Discover our carefully crafted dishes made with love</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-amber-600 font-bold text-xl">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Dietary Information</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded font-bold text-sm">V</span>
              <span className="text-gray-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-200 text-green-800 rounded font-bold text-sm">VG</span>
              <span className="text-gray-600">Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded font-bold text-sm">GF</span>
              <span className="text-gray-600">Gluten Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-bold text-sm">DF</span>
              <span className="text-gray-600">Dairy Free</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
