import { Camera, Truck, Gift, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Photo",
    description: "Take a photo of your household waste and upload it through our easy-to-use platform.",
    step: "01",
  },
  {
    icon: Truck,
    title: "Get Collected",
    description: "NGOs and volunteers in your area will receive your request and pick up the waste.",
    step: "02",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Receive points and rewards for every successful collection. Redeem them for exciting prizes!",
    step: "03",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Simple Steps to Make a Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of eco-conscious citizens turning their waste into rewards while helping the environment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-24 w-8 h-8 rounded-full bg-background shadow-soft items-center justify-center z-10">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
