import { getFabricTypes, getProductsByFabric } from "@/data/products";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductGrid = () => {
  const fabricTypes = getFabricTypes();

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece in our collection is thoughtfully designed to bring out
            your elegance and grace. Explore our range of premium kurthis by fabric type.
          </p>
        </div>

        <div className="w-full space-y-12">
          {fabricTypes.map((fabricType) => {
            const fabricProducts = getProductsByFabric(fabricType);
            
            return (
              <div key={fabricType} className="w-full">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6 px-2">
                  {fabricType} Kurthis ({fabricProducts.length})
                </h3>
                <div className="relative px-6 md:px-8 lg:px-12">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: false,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-4">
                      {fabricProducts.map((product) => (
                        <CarouselItem
                          key={product.id}
                          className="pl-1 md:pl-2 lg:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                          <ProductCard product={product} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10" />
                  </Carousel>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
