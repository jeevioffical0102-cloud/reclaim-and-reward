import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EcoCollect</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Connecting households with volunteers and NGOs to create a sustainable future through responsible waste management.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#upload" className="hover:text-primary-foreground transition-colors">Upload Waste</a></li>
              <li><a href="#rewards" className="hover:text-primary-foreground transition-colors">Rewards</a></li>
              <li><a href="#impact" className="hover:text-primary-foreground transition-colors">Our Impact</a></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="font-semibold mb-4">For Partners</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Become a Volunteer</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">NGO Partnership</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Corporate Program</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sponsor Rewards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@ecocollect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 EcoCollect. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/60 text-sm">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
