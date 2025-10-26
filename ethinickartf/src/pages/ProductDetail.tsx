import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generateWhatsAppLink } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleOrder = () => {
    const whatsappLink = generateWhatsAppLink(product);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/#products" className="hover:text-foreground transition-colors">
              {product.fabricType}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.id}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {product.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
              <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                {product.category}
              </Badge>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.id}
              </h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                  ₹{product.price}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">
                {product.name}
              </p>

              {/* Available Sizes Display */}
              {product.details.size && product.details.size.length > 0 && (
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Set available:</span> {product.details.size.join(", ")}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  onClick={() => addToCart(product)}
                  size="lg"
                  variant="outline"
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleOrder}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </Button>
              </div>

              {/* Product Specifications */}
              <div className="border-t border-border pt-6 space-y-3">
                <h3 className="text-sm font-medium mb-3">PRODUCT DETAILS</h3>
                
                {product.details.fabric && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Fabric</span>
                    <span className="font-medium">{product.details.fabric}</span>
                  </div>
                )}
                
                {product.details.color && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Color</span>
                    <span className="font-medium">{product.details.color}</span>
                  </div>
                )}
                
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Fabric Type</span>
                  <span className="font-medium">{product.fabricType}</span>
                </div>
                
                {product.details.care && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Care</span>
                    <span className="font-medium">{product.details.care}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description Tabs */}
          <Tabs defaultValue="description" className="mt-12">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional Information</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </TabsContent>
            <TabsContent value="additional" className="mt-6">
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="font-medium min-w-[120px]">Product Code:</span>
                  <span className="text-muted-foreground">{product.id}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium min-w-[120px]">Category:</span>
                  <span className="text-muted-foreground">{product.category}</span>
                </div>
                {product.details.size && (
                  <div className="flex gap-4">
                    <span className="font-medium min-w-[120px]">Available Sizes:</span>
                    <span className="text-muted-foreground">
                      {product.details.size.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
