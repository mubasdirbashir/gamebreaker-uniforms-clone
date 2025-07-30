import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import jerseyFootball from "@/assets/jersey-football.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import pantsAthletic from "@/assets/pants-athletic.jpg";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";

const MovingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pro Football Jersey",
      price: "$45.99",
      image: jerseyFootball,
      rating: 4.8,
      badge: "Hot"
    },
    {
      id: 2,
      name: "Elite Basketball Jersey",
      price: "$42.99",
      image: jerseyBasketball,
      rating: 4.9,
      badge: "New"
    },
    {
      id: 3,
      name: "Premium Soccer Jersey",
      price: "$39.99",
      image: jerseySoccer,
      rating: 4.7,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Athletic Team Pants",
      price: "$34.99",
      image: pantsAthletic,
      rating: 4.6,
      badge: "Popular"
    }
  ];

  // Duplicate products for seamless loop
  const allProducts = [...products, ...products, ...products];

  return (
    <section className="py-16 bg-gamebreaker-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              🔥 <span className="text-primary">TRENDING</span> NOW
            </h2>
            <p className="text-white/80">Popular products flying off our shelves</p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-background">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Moving Products Strip */}
      <div className="relative">
        <div className="flex animate-slide-right">
          {allProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-80 mx-4 card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.badge === 'Sale' ? 'bg-destructive' : 
                    product.badge === 'Hot' ? 'bg-red-500' :
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
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? 'text-sports-accent fill-current' : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Link to="/checkout">
                    <Button variant="gamebreaker" size="sm">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-white/80 mb-4">Don't see what you're looking for?</p>
        <Link to="/request-design">
          <Button variant="cta" size="lg">
            Request Custom Design
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MovingProducts;