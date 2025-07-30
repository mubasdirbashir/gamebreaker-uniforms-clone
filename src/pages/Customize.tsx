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
import { Upload, Palette, Shirt, Users, Calendar } from "lucide-react";
import { toast } from "sonner";

const Customize = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [customColor, setCustomColor] = useState("#000000");
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const { register, handleSubmit, setValue, watch } = useForm();

  const predefinedColors = [
    "#E53E3E", "#3182CE", "#38A169", "#D69E2E", "#805AD5",
    "#DD6B20", "#E53E3E", "#1A365D", "#2F855A", "#B7791F",
    "#553C9A", "#C05621", "#000000", "#FFFFFF", "#718096"
  ];

  const handleColorSelect = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, color]);
    } else {
      toast.error("You can select up to 3 colors only");
    }
  };

  const handleCustomColorAdd = () => {
    if (!selectedColors.includes(customColor) && selectedColors.length < 3) {
      setSelectedColors([...selectedColors, customColor]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'image') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'logo') {
          setUploadedLogo(result);
        } else {
          setUploadedImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    const customizationData = {
      ...data,
      selectedColors,
      customColor,
      uploadedLogo,
      uploadedImage
    };
    console.log("Customization Data:", customizationData);
    toast.success("Customization request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">CUSTOMIZE</span> YOUR UNIFORM
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create the perfect uniform for your team with our advanced customization tools
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
          {/* Customer Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="teamName">Team Name *</Label>
                <Input 
                  id="teamName" 
                  placeholder="Enter your team name"
                  {...register("teamName", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="contactName">Contact Person *</Label>
                <Input 
                  id="contactName" 
                  placeholder="Your full name"
                  {...register("contactName", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  placeholder="(555) 123-4567"
                  {...register("phone", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="sport">Sport Category *</Label>
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
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantity">Quantity Needed *</Label>
                <Input 
                  id="quantity" 
                  type="number"
                  placeholder="How many uniforms?"
                  {...register("quantity", { required: true })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Design Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shirt className="w-5 h-5" />
                Design Specifications
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
                <Label htmlFor="sizes">Size Range Needed</Label>
                <Textarea 
                  id="sizes"
                  placeholder="e.g., Youth S-L, Adult M-XXL (specify quantities for each size)"
                  {...register("sizes")}
                />
              </div>
            </CardContent>
          </Card>

          {/* Color Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Color Selection (Choose up to 3 colors)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-4 block">Predefined Colors</Label>
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
                  <Button type="button" onClick={handleCustomColorAdd} variant="outline">
                    Add Custom Color
                  </Button>
                </div>
              </div>

              {selectedColors.length > 0 && (
                <div>
                  <Label className="mb-2 block">Selected Colors</Label>
                  <div className="flex gap-2">
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
                Brand Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="logo" className="mb-2 block">Team Logo</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    {uploadedLogo ? (
                      <img src={uploadedLogo} alt="Logo" className="mx-auto max-h-24" />
                    ) : (
                      <div>
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload your team logo</p>
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
                  <Label htmlFor="image" className="mb-2 block">Reference Image</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="Reference" className="mx-auto max-h-24" />
                    ) : (
                      <div>
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Upload reference image</p>
                      </div>
                    )}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'image')}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Project Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="deadline">Needed By Date</Label>
                <Input 
                  id="deadline" 
                  type="date"
                  {...register("deadline")}
                />
              </div>
              <div>
                <Label htmlFor="rushOrder">Rush Order</Label>
                <Select onValueChange={(value) => setValue("rushOrder", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                    <SelectItem value="rush">Rush (1-2 weeks) +$5/item</SelectItem>
                    <SelectItem value="super-rush">Super Rush (3-7 days) +$15/item</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="notes">Special Instructions or Notes</Label>
              <Textarea 
                id="notes"
                placeholder="Any specific design requirements, player names, numbers, or special requests..."
                rows={4}
                {...register("notes")}
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
              Submit Customization Request
            </Button>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Customize;