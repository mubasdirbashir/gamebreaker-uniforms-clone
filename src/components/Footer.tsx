import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gamebreaker-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Size Charts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Gallery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Sports Categories */}
          <div>
            <h4 className="font-bold mb-4">Sports</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Football</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Basketball</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Baseball</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Soccer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hockey</a></li>
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