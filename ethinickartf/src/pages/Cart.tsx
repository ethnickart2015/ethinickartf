import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return "";

    let message = "Hello! I would like to order the following products:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.id}*\n`;
      message += `   ${item.product.name}\n`;
      message += `   Price: ₹${item.product.price}\n`;
      if (item.product.details.size && item.product.details.size.length > 0) {
        message += `   Available Sizes: ${item.product.details.size.join(", ")}\n`;
      }
      message += `\n`;
    });

    const total = cartItems.reduce((sum, item) => sum + item.product.price, 0);
    message += `*Total: ₹${total}*\n\n`;
    message += "Please confirm availability and delivery details.";

    return message;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "919876543210";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.product.price, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some products to get started</p>
              <Link to="/#products">
                <Button size="lg">Browse Products</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold">Shopping Cart</h1>
              <Button variant="outline" size="sm" onClick={clearCart}>
                Clear All
              </Button>
            </div>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-card border border-border rounded-lg p-4 flex gap-4"
                >
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-32 object-cover rounded-md"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-display font-semibold text-lg mb-1 hover:text-primary transition-colors">
                        {item.product.id}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">{item.product.name}</p>
                    {item.product.details.size && item.product.details.size.length > 0 && (
                      <p className="text-sm text-muted-foreground mb-2">
                        Available: {item.product.details.size.join(", ")}
                      </p>
                    )}
                    <p className="font-semibold text-primary">₹{item.product.price}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="font-display text-2xl font-bold text-primary">
                  ₹{getTotalPrice()}
                </span>
              </div>

              <Button
                onClick={handleSendWhatsApp}
                size="lg"
                className="w-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
