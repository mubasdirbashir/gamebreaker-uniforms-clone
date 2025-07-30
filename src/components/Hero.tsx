import { Button } from "@/components/ui/button";
import sportsCollageHero from "@/assets/sports-collage-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sportsCollageHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            GAME<span className="text-primary">BREAKER</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            Request a Free Custom Uniform Design
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Order Custom Jerseys, Uniforms & Team Apparel
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            GAMEBREAKER HAS AN IN-HOUSE TEAM OF EXPERT APPAREL DESIGNERS WHO WILL BRING YOUR VISION TO LIFE.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Request a Free Custom Uniform Design
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-background">
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-8 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;