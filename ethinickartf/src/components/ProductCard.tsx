import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden product-card-hover border border-border transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="p-3 md:p-4 text-center">
          <h3 className="font-display text-sm md:text-base lg:text-lg font-semibold text-card-foreground mb-2">
            {product.id}
          </h3>
        </div>
      </Link>
      
      <div className="px-3 pb-3 md:px-4 md:pb-4">
        <Button
          onClick={handleAddToCart}
          size="sm"
          className="w-full"
          variant="outline"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
