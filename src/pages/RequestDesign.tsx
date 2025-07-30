import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Palette, Paintbrush, Users, Zap, Star } from "lucide-react";
import { toast } from "sonner";

const RequestDesign = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [customColor, setCustomColor] = useState("#000000");
  const [uploadedFiles, setUploadedFiles] = useState<{logo?: string, reference?: string, inspiration?: string}>({});
  
  const { register, handleSubmit, setValue } = useForm();

  const predefinedColors = [
    "#E53E3E", "#3182CE", "#38A169", "#D69E2E", "#805AD5",
    "#DD6B20", "#E53E3E", "#1A365D", "#2F855A", "#B7791F",
    "#553C9A", "#C05621", "#000000", "#FFFFFF", "#718096"
  ];

  const handleColorSelect = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, color]);
    } else {
      toast.error("You can select up to 5 colors");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles(prev => ({
          ...prev,
          [type]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    const designData = {
      ...data,
      selectedColors,
      customColor,
      uploadedFiles
    };
    console.log("Design Request:", designData);
    toast.success("Design request submitted! Our team will create your custom design within 48 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">REQUEST FREE</span> CUSTOM DESIGN
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a professional uniform design created by our expert designers - completely free!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Design Request Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Contact & Team Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input 
                        id="contactName" 
                        {...register("contactName", { required: true })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="teamName">Team/Organization Name *</Label>
                      <Input 
                        id="teamName" 
                        {...register("teamName", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
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
                      <Label htmlFor="level">Competition Level</Label>
                      <Select onValueChange={(value) => setValue("level", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="youth">Youth/Recreation</SelectItem>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="college">College</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="adult-league">Adult League</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Design Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Paintbrush className="w-5 h-5" />
                    Design Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="uniformType">Uniform Type *</Label>
                    <Select onValueChange={(value) => setValue("uniformType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select uniform type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jersey">Jersey Only</SelectItem>
                        <SelectItem value="complete">Complete Uniform Set</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="designStyle">Design Style Preference</Label>
                    <Select onValueChange={(value) => setValue("designStyle", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern & Clean</SelectItem>
                        <SelectItem value="classic">Classic & Traditional</SelectItem>
                        <SelectItem value="bold">Bold & Aggressive</SelectItem>
                        <SelectItem value="minimalist">Minimalist</SelectItem>
                        <SelectItem value="vintage">Vintage/Retro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="designBrief">Design Brief & Vision</Label>
                    <Textarea 
                      id="designBrief"
                      placeholder="Describe your vision, team personality, any specific design elements you want to include..."
                      rows={4}
                      {...register("designBrief")}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Color Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Color Selection (Choose up to 5 colors)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-4 block">Team Colors</Label>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                      {predefinedColors.map((color, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleColorSelect(color)}
                          className={`w-12 h-12 rounded-lg border-4 transition-all ${
                            selectedColors.includes(color) 
                              ? 'border-primary scale-110' 
                              : 'border-border hover:border-muted-foreground'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="customColor" className="mb-2 block">Custom Color</Label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        id="customColor"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-20 h-10 p-1 border rounded"
                      />
                      <Button 
                        type="button" 
                        onClick={() => handleColorSelect(customColor)} 
                        variant="outline"
                      >
                        Add Custom Color
                      </Button>
                    </div>
                  </div>

                  {selectedColors.length > 0 && (
                    <div>
                      <Label className="mb-2 block">Selected Colors</Label>
                      <div className="flex gap-2 flex-wrap">
                        {selectedColors.map((color, index) => (
                          <Badge key={index} variant="outline" className="p-2">
                            <div 
                              className="w-4 h-4 rounded mr-2"
                              style={{ backgroundColor: color }}
                            />
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* File Uploads */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Design Assets & References
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="mb-2 block">Team Logo</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        {uploadedFiles.logo ? (
                          <img src={uploadedFiles.logo} alt="Logo" className="mx-auto max-h-16" />
                        ) : (
                          <div>
                            <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Upload logo</p>
                          </div>
                        )}
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'logo')}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Reference Images</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        {uploadedFiles.reference ? (
                          <img src={uploadedFiles.reference} alt="Reference" className="mx-auto max-h-16" />
                        ) : (
                          <div>
                            <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Similar designs</p>
                          </div>
                        )}
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'reference')}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Inspiration</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        {uploadedFiles.inspiration ? (
                          <img src={uploadedFiles.inspiration} alt="Inspiration" className="mx-auto max-h-16" />
                        ) : (
                          <div>
                            <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Style inspiration</p>
                          </div>
                        )}
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'inspiration')}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Design Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="numbers" {...register("includeNumbers")} />
                    <Label htmlFor="numbers">Include player numbers in design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="names" {...register("includeNames")} />
                    <Label htmlFor="names">Include player names in design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="multiple" {...register("multipleDesigns")} />
                    <Label htmlFor="multiple">Request 2-3 design variations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consultation" {...register("designConsultation")} />
                    <Label htmlFor="consultation">Schedule design consultation call</Label>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Request My Free Custom Design
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Free Design Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Professional Designers</h4>
                    <p className="text-sm text-muted-foreground">Expert sports uniform designers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Paintbrush className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Unlimited Revisions</h4>
                    <p className="text-sm text-muted-foreground">Perfect your design at no cost</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">High-Res Files</h4>
                    <p className="text-sm text-muted-foreground">Print-ready design files</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Process */}
            <Card>
              <CardHeader>
                <CardTitle>Design Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm">Submit design request</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm">Designer creates initial concepts</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm">Review and provide feedback</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <p className="text-sm">Finalize and receive files</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">48 HRS</div>
                  <p className="text-sm text-muted-foreground">Initial design delivery</p>
                  <div className="text-lg font-bold text-sports-accent mt-4 mb-2">100% FREE</div>
                  <p className="text-xs text-muted-foreground">No obligation to purchase</p>
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

export default RequestDesign;