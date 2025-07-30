import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Truck, MapPin, ShoppingBag, Lock, Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import jerseyFootball from "@/assets/jersey-football.jpg";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Custom Football Jersey",
      price: 45.99,
      originalPrice: 59.99,
      quantity: 2,
      size: "L",
      color: "Red/White",
      image: jerseyFootball
    },
    {
      id: 2,
      name: "Athletic Pants",
      price: 34.99,
      originalPrice: 44.99,
      quantity: 1,
      size: "L",
      color: "Navy",
      image: jerseyFootball
    }
  ]);

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shippingMethod, setShippingMethod] = useState("standard");
  
  const { register, handleSubmit } = useForm();

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = shippingMethod === "express" ? 15.99 : shippingMethod === "overnight" ? 29.99 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const onSubmit = (data: any) => {
    console.log("Order Data:", { ...data, cartItems, paymentMethod, shippingMethod });
    toast.success("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black mb-4">
            <span className="text-primary">CHECKOUT</span>
          </h1>
          <p className="text-muted-foreground">Complete your order securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" {...register("firstName", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" {...register("lastName", { required: true })} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" {...register("email", { required: true })} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" {...register("phone")} />
                  </div>
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input id="address" {...register("address", { required: true })} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" {...register("city", { required: true })} />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select onValueChange={(value) => register("state").onChange({ target: { value } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input id="zip" {...register("zip", { required: true })} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Standard Shipping</div>
                            <div className="text-sm text-muted-foreground">5-7 business days</div>
                          </div>
                          <div className="font-medium">$5.99</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Express Shipping</div>
                            <div className="text-sm text-muted-foreground">2-3 business days</div>
                          </div>
                          <div className="font-medium">$15.99</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="overnight" id="overnight" />
                      <Label htmlFor="overnight" className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">Overnight Shipping</div>
                            <div className="text-sm text-muted-foreground">Next business day</div>
                          </div>
                          <div className="font-medium">$29.99</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit" id="credit" />
                      <Label htmlFor="credit">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456"
                          {...register("cardNumber", { required: paymentMethod === "credit" })} 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input 
                            id="expiryDate" 
                            placeholder="MM/YY"
                            {...register("expiryDate", { required: paymentMethod === "credit" })} 
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input 
                            id="cvv" 
                            placeholder="123"
                            {...register("cvv", { required: paymentMethod === "credit" })} 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input 
                          id="cardName" 
                          {...register("cardName", { required: paymentMethod === "credit" })} 
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="billing" />
                    <Label htmlFor="billing" className="text-sm">
                      Billing address same as shipping address
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Cart Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Size: {item.size}</div>
                        <div>Color: {item.color}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground line-through">
                        ${(item.originalPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Price Breakdown */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full mt-6"
                  onClick={handleSubmit(onSubmit)}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Order
                </Button>
                
                <div className="text-xs text-center text-muted-foreground mt-4">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Secure 256-bit SSL encryption
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <div className="text-center">
              <Badge variant="outline" className="text-xs">
                🔒 100% Secure Checkout
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;