import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import jerseyFootball from "@/assets/jersey-football.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import pantsAthletic from "@/assets/pants-athletic.jpg";

const Collection = () => {
  const { sport } = useParams();
  
  const allProducts = {
    football: [
      {
        id: 1,
        name: "Custom Football Jersey",
        price: "$45.99",
        originalPrice: "$59.99",
        image: jerseyFootball,
        rating: 4.8,
        reviews: 124,
        badge: "Best Seller"
      },
      {
        id: 2,
        name: "Football Practice Jersey",
        price: "$35.99",
        originalPrice: "$45.99",
        image: jerseyFootball,
        rating: 4.6,
        reviews: 89,
        badge: "Popular"
      }
    ],
    basketball: [
      {
        id: 3,
        name: "Basketball Team Jersey",
        price: "$42.99",
        originalPrice: "$54.99",
        image: jerseyBasketball,
        rating: 4.9,
        reviews: 98,
        badge: "New"
      }
    ],
    soccer: [
      {
        id: 4,
        name: "Soccer Club Jersey",
        price: "$39.99",
        originalPrice: "$49.99",
        image: jerseySoccer,
        rating: 4.7,
        reviews: 156,
        badge: "Popular"
      }
    ],
    baseball: [
      {
        id: 5,
        name: "Baseball Team Jersey",
        price: "$44.99",
        originalPrice: "$56.99",
        image: jerseyFootball,
        rating: 4.8,
        reviews: 112,
        badge: "Best Seller"
      }
    ],
    hockey: [
      {
        id: 6,
        name: "Hockey Team Jersey",
        price: "$49.99",
        originalPrice: "$64.99",
        image: jerseyBasketball,
        rating: 4.9,
        reviews: 87,
        badge: "Premium"
      }
    ]
  };

  const sportName = sport || "custom-apparel";
  const products = allProducts[sportName as keyof typeof allProducts] || allProducts.football;
  const displayName = sportName.charAt(0).toUpperCase() + sportName.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">{displayName.toUpperCase()}</span> COLLECTION
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional {displayName} uniforms designed for peak performance
          </p>
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 card-gradient rounded-lg">
            <div className="text-3xl font-black text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Designs Available</div>
          </div>
          <div className="text-center p-6 card-gradient rounded-lg">
            <div className="text-3xl font-black text-primary mb-2">24HR</div>
            <div className="text-sm text-muted-foreground">Rush Available</div>
          </div>
          <div className="text-center p-6 card-gradient rounded-lg">
            <div className="text-3xl font-black text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Customizable</div>
          </div>
          <div className="text-center p-6 card-gradient rounded-lg">
            <div className="text-3xl font-black text-primary mb-2">4.8★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${
                  product.badge === 'New' ? 'bg-sports-accent' : 'bg-primary'
                }`}>
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
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-sports-accent fill-current' : 'text-muted-foreground'
                      }`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link to="/customize" className="flex-1">
                    <Button variant="gamebreaker" className="w-full">
                      Customize Now
                    </Button>
                  </Link>
                  <Link to="/checkout">
                    <Button variant="outline" size="sm">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-sports-accent/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your <span className="text-primary">{displayName}</span> Uniform?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get started with our free design consultation and see your team's vision come to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-design">
              <Button variant="cta" size="lg">
                Request Free Design
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="outline" size="lg">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Collection;