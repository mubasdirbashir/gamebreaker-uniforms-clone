import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

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
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Contact Us</span>
            <span className="text-muted-foreground">Login</span>
            <span className="text-muted-foreground">Sign Up</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Get a Free Quote</Button>
            <Button variant="cta" size="sm">Request a Free Custom Uniform Design</Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-black text-primary">
              GAME<span className="text-foreground">BREAKER</span>
            </h1>
            
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
          {sports.map((sport, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              size="sm" 
              className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground"
            >
              {sport}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;