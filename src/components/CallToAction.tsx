import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CallToAction = () => {
  const sports = [
    "Football", "Baseball", "Basketball", "Hockey", "Cheerleading", 
    "Soccer", "Lacrosse", "Track & Field", "Volleyball", "Wrestling", 
    "Pickle Ball", "Rugby", "Other"
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free custom uniform design today! Our expert designers will bring your vision to life.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-hero">
          <h3 className="text-2xl font-bold text-white mb-6">SIGN UP</h3>
          <p className="text-white/90 mb-6">
            Sign up below to learn about new trends, exclusive discounts, product developments, and more!
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2 text-left">EMAIL</label>
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/90 border-0 text-black"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2 text-left">SPORT</label>
              <Select>
                <SelectTrigger className="bg-white/90 border-0 text-black">
                  <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
                <SelectContent>
                  {sports.map((sport) => (
                    <SelectItem key={sport} value={sport.toLowerCase()}>
                      {sport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="default" className="w-full bg-primary hover:bg-primary-glow text-white font-bold py-3">
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background">
            Get a Free Quote
          </Button>
          <Button variant="cta" size="lg">
            Request a Free Custom Uniform Design
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;