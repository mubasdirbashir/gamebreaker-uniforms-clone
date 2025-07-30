import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const sports = [
    "Custom Apparel", "Football", "Baseball", "Basketball", "Hockey", 
    "Cheerleading", "Soccer", "Lacrosse", "Track & Field", "Volleyball", 
    "Wrestling", "Pickle Ball", "CPS Tracking Apparel", "Rugby"
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Contact Us</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Login</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Sign Up</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <Link to="/quote"><Button variant="outline" size="sm" className="hidden lg:flex">Get a Free Quote</Button></Link>
            <Link to="/request-design"><Button variant="cta" size="sm" className="text-xs lg:text-sm px-2 lg:px-4">Request Free Design</Button></Link>
            <Link to="/checkout">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden lg:inline ml-1">Cart</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-black text-primary cursor-pointer hover:opacity-80 transition-opacity">
                GAME<span className="text-foreground">BREAKER</span>
              </h1>
            </Link>
            
            <div className="hidden lg:flex items-center gap-1 max-w-md">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full px-4 py-2 bg-input rounded-l border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="default" size="sm" className="rounded-l-none">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button variant="ghost" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1 py-2 overflow-x-auto">
          {sports.map((sport, index) => {
            const sportSlug = sport.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
            const isCollectionLink = !["Custom Apparel", "CPS Tracking Apparel"].includes(sport);
            
            return (
              <Link key={index} to={isCollectionLink ? `/collection/${sportSlug}` : "/products"}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {sport}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;