import { useState } from "react";
import tandooriImg from "@/assets/tandoori.jpg";
import butterChickenImg from "@/assets/butter-chicken.jpg";
import breadsImg from "@/assets/breads.jpg";
import lassiImg from "@/assets/lassi.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isSpecial?: boolean;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Snacks",
    subtitle: "Begin your feast with our crispy delights",
    image: tandooriImg,
    items: [
      { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor", price: 220, isVeg: true, isSpecial: true },
      { name: "Tandoori Chicken", description: "Half chicken marinated in yogurt & spices", price: 320, isVeg: false, isSpecial: true },
      { name: "Chicken Malai Tikka", description: "Creamy chicken pieces grilled to perfection", price: 280, isVeg: false },
      { name: "Fish Amritsari", description: "Crispy fried fish with Punjabi spices", price: 300, isVeg: false },
      { name: "Veg Seekh Kebab", description: "Mixed vegetable kebabs with aromatic herbs", price: 180, isVeg: true },
      { name: "Mutton Seekh Kebab", description: "Minced mutton kebabs from the clay oven", price: 340, isVeg: false },
      { name: "Amritsari Kulcha", description: "Stuffed bread with aloo filling", price: 80, isVeg: true },
      { name: "Papad Basket", description: "Assorted papads with chutneys", price: 60, isVeg: true },
    ],
  },
  {
    id: "maincourse",
    title: "Main Course",
    subtitle: "Rich curries & traditional Punjabi specialties",
    image: butterChickenImg,
    items: [
      { name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: 340, isVeg: false, isSpecial: true },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with butter & cream", price: 220, isVeg: true, isSpecial: true },
      { name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: 260, isVeg: true },
      { name: "Kadhai Chicken", description: "Chicken cooked with bell peppers & spices", price: 320, isVeg: false },
      { name: "Sarson Da Saag", description: "Traditional mustard greens curry (seasonal)", price: 200, isVeg: true, isSpecial: true },
      { name: "Mutton Rogan Josh", description: "Aromatic mutton curry with Kashmiri spices", price: 380, isVeg: false },
      { name: "Chole Bhature", description: "Spiced chickpeas with fluffy fried bread", price: 160, isVeg: true },
      { name: "Palak Paneer", description: "Cottage cheese in creamy spinach gravy", price: 240, isVeg: true },
      { name: "Rajma Masala", description: "Red kidney beans in thick tomato curry", price: 180, isVeg: true },
      { name: "Chicken Curry", description: "Home-style chicken with onion-tomato gravy", price: 280, isVeg: false },
    ],
  },
  {
    id: "breads",
    title: "Breads & Rice",
    subtitle: "Fresh from our tandoor & handi",
    image: breadsImg,
    items: [
      { name: "Butter Naan", description: "Soft leavened bread brushed with butter", price: 50, isVeg: true },
      { name: "Garlic Naan", description: "Naan topped with garlic & coriander", price: 60, isVeg: true },
      { name: "Laccha Paratha", description: "Layered whole wheat bread", price: 55, isVeg: true },
      { name: "Missi Roti", description: "Traditional gram flour bread", price: 45, isVeg: true },
      { name: "Makki Di Roti", description: "Corn flour flatbread (seasonal)", price: 50, isVeg: true, isSpecial: true },
      { name: "Jeera Rice", description: "Basmati rice tempered with cumin", price: 140, isVeg: true },
      { name: "Veg Biryani", description: "Fragrant rice with mixed vegetables", price: 200, isVeg: true },
      { name: "Chicken Biryani", description: "Aromatic rice layered with spiced chicken", price: 280, isVeg: false },
    ],
  },
  {
    id: "beverages",
    title: "Lassi & Beverages",
    subtitle: "Cool refreshments to complement your meal",
    image: lassiImg,
    items: [
      { name: "Sweet Lassi", description: "Traditional Punjabi yogurt drink", price: 80, isVeg: true, isSpecial: true },
      { name: "Mango Lassi", description: "Creamy mango flavored lassi", price: 100, isVeg: true },
      { name: "Salted Lassi (Chaach)", description: "Refreshing buttermilk with spices", price: 60, isVeg: true },
      { name: "Masala Chai", description: "Spiced Indian tea", price: 30, isVeg: true },
      { name: "Cold Coffee", description: "Chilled coffee with ice cream", price: 90, isVeg: true },
      { name: "Fresh Lime Soda", description: "Sweet or salted nimbu pani", price: 50, isVeg: true },
      { name: "Mango Shake", description: "Thick mango milkshake", price: 100, isVeg: true },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const currentCategory = menuData.find((cat) => cat.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="bg-gradient-warm py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-saffron/10 px-4 py-1 text-sm font-medium text-saffron">
            Our Menu
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Taste of Punjab
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our carefully crafted menu featuring authentic Punjabi dishes 
            prepared with love and traditional recipes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-saffron text-primary-foreground shadow-warm"
                  : "bg-card text-muted-foreground hover:bg-saffron/10 hover:text-saffron shadow-card"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Category Image */}
          <div className="relative overflow-hidden rounded-2xl animate-scale-in">
            <img
              src={currentCategory.image}
              alt={currentCategory.title}
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="mb-2 font-display text-3xl font-bold text-primary-foreground">
                {currentCategory.title}
              </h3>
              <p className="text-primary-foreground/80">{currentCategory.subtitle}</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid gap-4 sm:grid-cols-2">
            {currentCategory.items.map((item, index) => (
              <div
                key={item.name}
                className="group relative rounded-xl bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-warm animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
              >
                {/* Veg/Non-Veg Indicator */}
                <div
                  className={`absolute right-4 top-4 h-4 w-4 rounded-sm border-2 ${
                    item.isVeg
                      ? "border-coriander bg-coriander/20"
                      : "border-tandoori bg-tandoori/20"
                  }`}
                >
                  <div
                    className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      item.isVeg ? "bg-coriander" : "bg-tandoori"
                    }`}
                  />
                </div>

                {/* Special Badge */}
                {item.isSpecial && (
                  <span className="absolute -left-2 -top-2 rounded-full bg-gold px-2 py-0.5 text-xs font-bold text-foreground">
                    ★ Chef's Special
                  </span>
                )}

                <h4 className="mb-1 pr-6 font-display text-lg font-semibold text-foreground group-hover:text-saffron transition-colors">
                  {item.name}
                </h4>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                <p className="font-display text-xl font-bold text-saffron">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
