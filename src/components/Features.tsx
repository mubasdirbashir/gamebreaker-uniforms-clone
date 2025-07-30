import competitivePricing from "@/assets/competitive-pricing.png";
import fastTurnaround from "@/assets/fast-turnaround.png";
import fullyCustomizable from "@/assets/fully-customizable.png";
import premiumMaterials from "@/assets/premium-materials.png";
import vibrantSublimation from "@/assets/vibrant-sublimation.png";
import unlimitedPossibilities from "@/assets/unlimited-possibilities.png";

const Features = () => {
  const features = [
    {
      icon: competitivePricing,
      title: "COMPETITIVE PRICING",
      description: "We offer some of the lowest pricing on the market for fully custom goods. We include names and numbers at no added cost"
    },
    {
      icon: fastTurnaround,
      title: "FAST TURNAROUND",
      description: "We can fill orders within 3-4 weeks! Our competitors turn around times are 2-3 times longer."
    },
    {
      icon: fullyCustomizable,
      title: "FULLY CUSTOMIZABLE",
      description: "Every inch of our uniforms is completely customizable. Work with our design team to create free mockups with your team's logos and colors!"
    },
    {
      icon: premiumMaterials,
      title: "PREMIUM MATERIALS",
      description: "We work with only the best materials, including our moisture wicking performance polyester, 260-GSM Compression Spandex, and High Quality Cotton. Our products are lightweight, yet durable and built to last!"
    },
    {
      icon: vibrantSublimation,
      title: "VIBRANT SUBLIMATION",
      description: "High quality sublimations means that colors are vibrant, and even complex design's don't peel, crack, or fade over time!"
    },
    {
      icon: unlimitedPossibilities,
      title: "UNLIMITED POSSIBILITIES",
      description: "Our team of expert designers can create unique designs that will make your team stand out from the competition. No design is too complex!"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-lg p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="mb-6 flex justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-card-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;