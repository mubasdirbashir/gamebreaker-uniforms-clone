import { Button } from "@/components/ui/button";
import bannerSale from "@/assets/banner-sale.jpg";
import bannerNew from "@/assets/banner-new.jpg";

const BannerAds = () => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sale Banner */}
          <div 
            className="relative rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
            style={{ animationDelay: '0.1s' }}
          >
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerSale})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 animate-bounce-slow">
                    SUMMER SALE
                  </h3>
                  <p className="text-xl md:text-2xl font-bold mb-6">
                    30% OFF All Jerseys
                  </p>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background">
                    Shop Sale Items
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* New Arrivals Banner */}
          <div 
            className="relative rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
            style={{ animationDelay: '0.2s' }}
          >
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerNew})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    NEW ARRIVALS
                  </h3>
                  <p className="text-xl md:text-2xl font-bold mb-6">
                    Latest 2024 Collection
                  </p>
                  <Button variant="gamebreaker" size="lg">
                    Explore New Styles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Promotional Banner */}
        <div className="mt-8 hero-gradient rounded-lg p-8 text-center text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            🏆 FREE DESIGN CONSULTATION + FAST 3-WEEK DELIVERY
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Get professional uniform designs at no extra cost. Limited time offer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background">
              Get Free Design
            </Button>
            <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
              Call 1-800-GAMEBREAKER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAds;