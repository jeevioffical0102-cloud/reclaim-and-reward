import { Leaf, Droplets, Wind, TreeDeciduous } from "lucide-react";

const impactStats = [
  {
    icon: Leaf,
    value: "15,000",
    unit: "Tons",
    label: "Waste Recycled",
    description: "Diverted from landfills",
  },
  {
    icon: Droplets,
    value: "2.5M",
    unit: "Liters",
    label: "Water Saved",
    description: "Through recycling efforts",
  },
  {
    icon: Wind,
    value: "8,000",
    unit: "Tons",
    label: "CO₂ Reduced",
    description: "Carbon emissions prevented",
  },
  {
    icon: TreeDeciduous,
    value: "12,000",
    unit: "Trees",
    label: "Trees Planted",
    description: "By our community",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Together, We're Making a Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            Every waste collection contributes to a cleaner planet. Here's what our community has achieved together.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <div className="mb-2">
                <span className="text-4xl font-bold text-foreground">{stat.value}</span>
                <span className="text-lg font-semibold text-primary ml-1">{stat.unit}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Make Your Impact?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
            Join our growing community of eco-warriors and start contributing to a sustainable future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#upload" 
              className="inline-flex items-center justify-center gap-2 hero-gradient text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all"
            >
              Start Recycling Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
