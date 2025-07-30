import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Clock, DollarSign, FileText, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const Quote = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log("Quote Request:", data);
    toast.success("Quote request submitted! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">GET FREE</span> QUOTE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant quote for your custom uniforms. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      {...register("lastName", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      {...register("phone")}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="organization">Team/Organization Name</Label>
                    <Input 
                      id="organization" 
                      {...register("organization")}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sport">Sport/Activity *</Label>
                      <Select onValueChange={(value) => setValue("sport", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="football">Football</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="soccer">Soccer</SelectItem>
                          <SelectItem value="baseball">Baseball</SelectItem>
                          <SelectItem value="hockey">Hockey</SelectItem>
                          <SelectItem value="volleyball">Volleyball</SelectItem>
                          <SelectItem value="track">Track & Field</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="uniformType">Uniform Type *</Label>
                      <Select onValueChange={(value) => setValue("uniformType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jersey">Jersey Only</SelectItem>
                          <SelectItem value="pants">Pants Only</SelectItem>
                          <SelectItem value="complete">Complete Uniform</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Approximate Quantity *</Label>
                      <Select onValueChange={(value) => setValue("quantity", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 pieces</SelectItem>
                          <SelectItem value="11-25">11-25 pieces</SelectItem>
                          <SelectItem value="26-50">26-50 pieces</SelectItem>
                          <SelectItem value="51-100">51-100 pieces</SelectItem>
                          <SelectItem value="100+">100+ pieces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Needed By *</Label>
                      <Select onValueChange={(value) => setValue("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-week">Within 1 week</SelectItem>
                          <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="flexible">Timeline is flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                    <Select onValueChange={(value) => setValue("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Tell us about your uniform needs, design preferences, colors, logos, etc."
                      rows={4}
                      {...register("description")}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Additional Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="design" {...register("designService")} />
                    <Label htmlFor="design">Custom Design Service</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="numbering" {...register("numbering")} />
                    <Label htmlFor="numbering">Player Names & Numbers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="logo" {...register("logoService")} />
                    <Label htmlFor="logo">Logo Digitization</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rush" {...register("rushOrder")} />
                    <Label htmlFor="rush">Rush Order Service</Label>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Get My Free Quote
              </Button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Why Get a Quote?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Competitive Pricing</h4>
                    <p className="text-sm text-muted-foreground">Get the best value for your budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Fast Response</h4>
                    <p className="text-sm text-muted-foreground">Quote delivered within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Detailed Breakdown</h4>
                    <p className="text-sm text-muted-foreground">Clear pricing with no hidden fees</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">quotes@gamebreaker.com</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Quote Process */}
            <Card>
              <CardHeader>
                <CardTitle>Quote Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm">Submit your requirements</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm">Our team reviews your needs</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm">Receive detailed quote</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <p className="text-sm">Approve and start production</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Quote;