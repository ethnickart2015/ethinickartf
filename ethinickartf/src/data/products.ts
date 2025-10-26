export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  fabricType: 'Cotton' | 'Silk' | 'Rayon' | 'Linen'; // Main fabric category
  category: string;
  details: {
    fabric?: string;
    color?: string;
    size?: string[];
    care?: string;
  };
}

export const products: Product[] = [
  {
    id: "KUR001",
    name: "Crimson Elegance",
    description: "Handcrafted silk kurthi with intricate embroidery, perfect for festive occasions",
    price: 2499,
    images: ["/products/crimson-elegance.jpg"],
    fabricType: "Silk",
    category: "Festive",
    details: {
      fabric: "Pure Silk",
      color: "Crimson Red",
      size: ["S", "M", "L", "XL"],
      care: "Dry clean only"
    }
  },
  {
    id: "KUR002",
    name: "Ivory Dream",
    description: "Elegant cotton kurthi with delicate lace detailing, ideal for casual elegance",
    price: 1899,
    images: ["/products/ivory-dream.jpg"],
    fabricType: "Cotton",
    category: "Casual",
    details: {
      fabric: "Premium Cotton",
      color: "Ivory White",
      size: ["S", "M", "L", "XL"],
      care: "Machine wash cold"
    }
  },
  {
    id: "KUR003",
    name: "Sunset Grace",
    description: "Beautiful georgette kurthi with golden embellishments, a statement piece",
    price: 2899,
    images: ["/products/sunset-grace.jpg"],
    fabricType: "Rayon",
    category: "Evening",
    details: {
      fabric: "Georgette",
      color: "Sunset Orange",
      size: ["S", "M", "L", "XL", "XXL"],
      care: "Dry clean recommended"
    }
  },
  {
    id: "KUR004",
    name: "Mint Breeze",
    description: "Lightweight cotton kurthi perfect for summer days and everyday comfort",
    price: 1499,
    images: ["/products/mint-breeze.jpg"],
    fabricType: "Cotton",
    category: "Casual",
    details: {
      fabric: "Cotton Blend",
      color: "Mint Green",
      size: ["S", "M", "L", "XL"],
      care: "Machine wash"
    }
  },
  {
    id: "KUR005",
    name: "Royal Indigo",
    description: "Luxurious silk kurthi with traditional block print, a timeless classic",
    price: 2699,
    images: ["/products/royal-indigo.jpg"],
    fabricType: "Silk",
    category: "Traditional",
    details: {
      fabric: "Silk Blend",
      color: "Indigo Blue",
      size: ["S", "M", "L", "XL"],
      care: "Dry clean only"
    }
  },
  {
    id: "KUR006",
    name: "Pearl White",
    description: "Sophisticated white kurthi with pearl accents, perfect for formal occasions",
    price: 3299,
    images: ["/products/pearl-white.jpg"],
    fabricType: "Silk",
    category: "Formal",
    details: {
      fabric: "Premium Silk",
      color: "Pearl White",
      size: ["S", "M", "L", "XL"],
      care: "Dry clean only"
    }
  },
  {
    id: "KUR007",
    name: "Blush Rose",
    description: "Delicate chiffon kurthi with floral embroidery, feminine and elegant",
    price: 2199,
    images: ["/products/blush-rose.jpg"],
    fabricType: "Rayon",
    category: "Evening",
    details: {
      fabric: "Chiffon",
      color: "Blush Pink",
      size: ["S", "M", "L", "XL"],
      care: "Hand wash cold"
    }
  },
  {
    id: "KUR008",
    name: "Emerald Charm",
    description: "Stunning emerald green kurthi with sequin work, makes a bold statement",
    price: 2799,
    images: ["/products/emerald-charm.jpg"],
    fabricType: "Rayon",
    category: "Festive",
    details: {
      fabric: "Georgette with Lining",
      color: "Emerald Green",
      size: ["S", "M", "L", "XL", "XXL"],
      care: "Dry clean recommended"
    }
  },
  {
    id: "KUR009",
    name: "Champagne Shine",
    description: "Luxurious metallic kurthi perfect for special celebrations",
    price: 3499,
    images: ["/products/champagne-shine.jpg"],
    fabricType: "Silk",
    category: "Festive",
    details: {
      fabric: "Brocade Silk",
      color: "Champagne Gold",
      size: ["S", "M", "L", "XL"],
      care: "Dry clean only"
    }
  },
  {
    id: "KUR010",
    name: "Navy Classic",
    description: "Timeless navy blue kurthi with minimal design, versatile and sophisticated",
    price: 1799,
    images: ["/products/navy-classic.jpg"],
    fabricType: "Cotton",
    category: "Casual",
    details: {
      fabric: "Cotton",
      color: "Navy Blue",
      size: ["S", "M", "L", "XL", "XXL"],
      care: "Machine wash"
    }
  }
];

// Get unique fabric types dynamically
export const getFabricTypes = (): string[] => {
  return Array.from(new Set(products.map(p => p.fabricType))).sort();
};

// Group products by fabric type
export const getProductsByFabric = (fabricType: string): Product[] => {
  return products.filter(p => p.fabricType === fabricType);
};

export const generateWhatsAppLink = (product: Product): string => {
  const phoneNumber = "919999999999"; // Replace with actual WhatsApp Business number
  const message = encodeURIComponent(
    `Hi! I'm interested in:\n\n` +
    `Product: ${product.name}\n` +
    `Product ID: ${product.id}\n` +
    `Price: ₹${product.price}\n` +
    `Category: ${product.category}\n\n` +
    `Could you please provide more information?`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
