import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import jerseyFootball from "@/assets/jersey-football.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import pantsAthletic from "@/assets/pants-athletic.jpg";
import { Star, ShoppingCart } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Custom Football Jersey",
      category: "Football",
      price: "$45.99",
      originalPrice: "$59.99",
      image: jerseyFootball,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      description: "Premium moisture-wicking fabric with custom design options"
    },
    {
      id: 2,
      name: "Basketball Team Jersey",
      category: "Basketball",
      price: "$42.99",
      originalPrice: "$54.99",
      image: jerseyBasketball,
      rating: 4.9,
      reviews: 98,
      badge: "New",
      description: "Lightweight breathable design perfect for court action"
    },
    {
      id: 3,
      name: "Soccer Club Jersey",
      category: "Soccer",
      price: "$39.99",
      originalPrice: "$49.99",
      image: jerseySoccer,
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      description: "Durable polyester blend with vibrant sublimation printing"
    },
    {
      id: 4,
      name: "Athletic Pants",
      category: "Bottoms",
      price: "$34.99",
      originalPrice: "$44.99",
      image: pantsAthletic,
      rating: 4.6,
      reviews: 89,
      badge: "Sale",
      description: "Comfortable stretch fabric with reinforced seams"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">FEATURED</span> PRODUCTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of custom sports uniforms and team apparel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.badge === 'Sale' ? 'bg-destructive' : 
                    product.badge === 'New' ? 'bg-sports-accent' : 
                    'bg-primary'
                  }`}
                >
                  {product.badge}
                </Badge>
                <Button 
                  variant="gamebreaker" 
                  size="sm" 
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-semibold">{product.category}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-sports-accent fill-current' : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button variant="gamebreaker" className="flex-1">
                    Customize Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;