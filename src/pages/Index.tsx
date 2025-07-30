import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import BannerAds from "@/components/BannerAds";
import MovingProducts from "@/components/MovingProducts";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <BannerAds />
      <Features />
      <MovingProducts />
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
