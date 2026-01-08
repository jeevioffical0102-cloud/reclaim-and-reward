import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Users, Gift } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Recycle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Join the Green Revolution</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Turn Your Waste Into{' '}
            <span className="text-gradient">Rewards</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with NGOs and volunteers in your community. Upload photos of your household waste, 
            get it collected, and earn rewards for contributing to a sustainable future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Upload Your Waste
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Become a Volunteer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Recycle className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">15K+</span>
              </div>
              <span className="text-sm text-muted-foreground">Tons Recycled</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">8K+</span>
              </div>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Gift className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">50K+</span>
              </div>
              <span className="text-sm text-muted-foreground">Rewards Given</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block absolute right-20 top-1/3 w-20 h-20 rounded-2xl hero-gradient shadow-elevated animate-float opacity-80" />
      <div className="hidden lg:block absolute right-40 bottom-1/4 w-14 h-14 rounded-xl bg-secondary shadow-card animate-float-delayed opacity-80" />
    </section>
  );
};

export default HeroSection;
