import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gamebreaker-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black text-primary mb-4">
              GAME<span className="text-white">BREAKER</span>
            </h3>
            <p className="text-white/80 mb-4">
              Creating custom sports uniforms and team apparel with expert design and premium materials.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/customize" className="hover:text-primary transition-colors">Custom Design</Link></li>
              <li><Link to="/quote" className="hover:text-primary transition-colors">Get Quote</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/checkout" className="hover:text-primary transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Sports Categories */}
          <div>
            <h4 className="font-bold mb-4">Sports</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/collection/football" className="hover:text-primary transition-colors">Football</Link></li>
              <li><Link to="/collection/basketball" className="hover:text-primary transition-colors">Basketball</Link></li>
              <li><Link to="/collection/baseball" className="hover:text-primary transition-colors">Baseball</Link></li>
              <li><Link to="/collection/soccer" className="hover:text-primary transition-colors">Soccer</Link></li>
              <li><Link to="/collection/hockey" className="hover:text-primary transition-colors">Hockey</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/80">
              <p>1-800-GAMEBREAKER</p>
              <p>info@gamebreaker.com</p>
              <p>123 Sports Drive<br />Athletic City, AC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 GameBreaker. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;