import { Gift, Star, Coins, ShoppingBag, Coffee, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const rewards = [
  {
    icon: Coffee,
    title: "Coffee Voucher",
    points: 100,
    description: "Free coffee at partner cafes",
    popular: false,
  },
  {
    icon: ShoppingBag,
    title: "Shopping Discount",
    points: 250,
    description: "10% off at eco-friendly stores",
    popular: true,
  },
  {
    icon: TreePine,
    title: "Plant a Tree",
    points: 500,
    description: "We plant a tree in your name",
    popular: false,
  },
];

const RewardsSection = () => {
  return (
    <section id="rewards" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Rewards Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Turn Points Into Perks
          </h2>
          <p className="text-muted-foreground text-lg">
            Every piece of waste you recycle earns you points. Redeem them for exclusive rewards from our eco-friendly partners.
          </p>
        </div>

        {/* Points Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="hero-gradient rounded-2xl p-8 shadow-elevated">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Coins className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Your Current Balance</p>
                  <p className="text-4xl font-bold">1,250 Points</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Star className="w-4 h-4" />
                  View History
                </Button>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Gift className="w-4 h-4" />
                  Redeem Points
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                reward.popular ? "ring-2 ring-secondary" : ""
              }`}
            >
              {reward.popular && (
                <div className="absolute -top-3 right-6 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                <reward.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">{reward.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{reward.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Coins className="w-4 h-4 text-secondary" />
                  <span className="font-bold text-foreground">{reward.points}</span>
                  <span className="text-muted-foreground text-sm">points</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  Redeem
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
