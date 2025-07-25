// Mock data for the luxury pants brand

export const products = [
  {
    id: 1,
    name: "Minimal Plaid Trousers",
    price: 198,
    image: "https://images.unsplash.com/photo-1570653321427-0e4d0c40bb84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYW50c3xlbnwwfHx8fDE3NTM0NTY0NDR8MA&ixlib=rb-4.1.0&q=85",
    description: "Elegant plaid trousers with a modern minimal cut. Perfect for contemporary professional settings.",
    category: "business",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Plaid", "Black", "Navy"],
    inStock: true
  },
  {
    id: 2,
    name: "Classic Tailored Pants",
    price: 215,
    image: "https://images.unsplash.com/photo-1570653321586-3bb42aaee967?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBwYW50c3xlbnwwfHx8fDE3NTM0NTY0NDR8MA&ixlib=rb-4.1.0&q=85",
    description: "Timeless tailored pants with impeccable fit and premium fabric. A wardrobe essential.",
    category: "business",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Navy"],
    inStock: true
  },
  {
    id: 3,
    name: "Sophisticated Wide-Leg Trousers",
    price: 189,
    image: "https://images.unsplash.com/photo-1570653321841-462dd6268561?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBwYW50c3xlbnwwfHx8fDE3NTM0NTY0NDR8MA&ixlib=rb-4.1.0&q=85",
    description: "Contemporary wide-leg trousers that combine comfort with sophisticated style.",
    category: "casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Olive"],
    inStock: true
  },
  {
    id: 4,
    name: "Modern Casual Chinos",
    price: 175,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHx0cm91c2Vyc3xlbnwwfHx8fDE3NTM0NTY0NTN8MA&ixlib=rb-4.1.0&q=85",
    description: "Versatile chinos perfect for casual elegance. Effortlessly stylish for everyday wear.",
    category: "casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Charcoal"],
    inStock: true
  },
  {
    id: 5,
    name: "Premium Denim Trousers",
    price: 225,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHx0cm91c2Vyc3xlbnwwfHx8fDE3NTM0NTY0NTN8MA&ixlib=rb-4.1.0&q=85",
    description: "Elevated denim with a sophisticated twist. Japanese selvedge denim with exceptional craftsmanship.",
    category: "denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Indigo", "Black", "Raw"],
    inStock: true
  },
  {
    id: 6,
    name: "Luxury Linen Trousers",
    price: 195,
    image: "https://images.unsplash.com/photo-1570653321427-0e4d0c40bb84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYW50c3xlbnwwfHx8fDE3NTM0NTY0NDR8MA&ixlib=rb-4.1.0&q=85",
    description: "Breathable linen trousers perfect for summer sophistication. Naturally wrinkle-resistant.",
    category: "summer",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "White", "Stone"],
    inStock: true
  }
];

export const categories = [
  { id: 1, name: "All", slug: "all" },
  { id: 2, name: "Business", slug: "business" },
  { id: 3, name: "Casual", slug: "casual" },
  { id: 4, name: "Denim", slug: "denim" },
  { id: 5, name: "Summer", slug: "summer" }
];

export const brandInfo = {
  name: "LUXE PANTS",
  tagline: "Crafted for the discerning",
  description: "Discover our carefully curated collection of premium trousers. Each piece is designed with attention to detail, using only the finest fabrics and construction techniques. Our pants are made for those who appreciate quality, comfort, and timeless style.",
  story: "Born from a passion for exceptional craftsmanship, LUXE PANTS represents the perfect marriage of contemporary design and traditional tailoring. We believe that the right pair of trousers can transform not just your wardrobe, but your confidence."
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director",
    content: "The quality is exceptional. These pants have become my go-to for both professional meetings and casual outings.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Architect",
    content: "Finally found pants that combine comfort with sophistication. The fit is perfect and the fabric feels amazing.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Fashion Consultant",
    content: "LUXE PANTS has redefined my wardrobe. The attention to detail and quality is unmatched.",
    rating: 5
  }
];

// Mock cart functionality
export const cartActions = {
  addToCart: (product, size, color) => {
    console.log(`Added to cart: ${product.name} - Size: ${size}, Color: ${color}`);
    // Store in localStorage for demo purposes
    const cart = JSON.parse(localStorage.getItem('luxe-cart') || '[]');
    const existingItem = cart.find(item => 
      item.id === product.id && item.size === size && item.color === color
    );
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
        quantity: 1
      });
    }
    
    localStorage.setItem('luxe-cart', JSON.stringify(cart));
    return cart;
  },
  
  getCart: () => {
    return JSON.parse(localStorage.getItem('luxe-cart') || '[]');
  },
  
  updateQuantity: (productId, size, color, quantity) => {
    const cart = JSON.parse(localStorage.getItem('luxe-cart') || '[]');
    const itemIndex = cart.findIndex(item => 
      item.id === productId && item.size === size && item.color === color
    );
    
    if (itemIndex !== -1) {
      if (quantity > 0) {
        cart[itemIndex].quantity = quantity;
      } else {
        cart.splice(itemIndex, 1);
      }
    }
    
    localStorage.setItem('luxe-cart', JSON.stringify(cart));
    return cart;
  },
  
  removeFromCart: (productId, size, color) => {
    const cart = JSON.parse(localStorage.getItem('luxe-cart') || '[]');
    const filteredCart = cart.filter(item => 
      !(item.id === productId && item.size === size && item.color === color)
    );
    
    localStorage.setItem('luxe-cart', JSON.stringify(filteredCart));
    return filteredCart;
  },
  
  clearCart: () => {
    localStorage.removeItem('luxe-cart');
    return [];
  }
};