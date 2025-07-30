import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ShoppingCart, Filter, Grid, List } from "lucide-react";
import jerseyFootball from "@/assets/jersey-football.jpg";
import jerseyBasketball from "@/assets/jersey-basketball.jpg";
import jerseySoccer from "@/assets/jersey-soccer.jpg";
import pantsAthletic from "@/assets/pants-athletic.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black mb-2">
              <span className="text-primary">ALL</span> PRODUCTS
            </h1>
            <p className="text-muted-foreground">Discover our complete collection of custom sports uniforms</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="baseball">Baseball</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <div className="space-y-2">
                    <Input placeholder="Min Price" />
                    <Input placeholder="Max Price" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <Button key={size} variant="outline" size="sm">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}>
              {products.map((product) => (
                <div key={product.id} className="group card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="relative overflow-hidden bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-3 left-3 ${
                      product.badge === 'Sale' ? 'bg-destructive' : 
                      product.badge === 'New' ? 'bg-sports-accent' : 
                      'bg-primary'
                    }`}>
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-sm text-primary font-semibold">{product.category}</span>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;