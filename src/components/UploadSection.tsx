import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Camera, X, CheckCircle2, MapPin, Package } from "lucide-react";

const wasteCategories = [
  { id: "plastic", label: "Plastic", icon: "♻️" },
  { id: "paper", label: "Paper", icon: "📄" },
  { id: "glass", label: "Glass", icon: "🫙" },
  { id: "metal", label: "Metal", icon: "🥫" },
  { id: "organic", label: "Organic", icon: "🍂" },
  { id: "electronics", label: "E-Waste", icon: "📱" },
];

const UploadSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (selectedImage && selectedCategory) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedImage(null);
        setSelectedCategory("");
      }, 3000);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="upload" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Upload Waste
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Share Your Waste, Make an Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            Upload a photo of your recyclable waste and our network of volunteers will collect it from your doorstep.
          </p>
        </div>

        {/* Upload Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8">
            {isSubmitted ? (
              /* Success State */
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6 shadow-card">
                  <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h3>
                <p className="text-muted-foreground mb-4">
                  A volunteer will contact you soon for pickup.
                </p>
                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-accent-foreground">+10 Points Earned!</span>
                </div>
              </div>
            ) : (
              <>
                {/* Image Upload Area */}
                <div className="mb-8">
                  {selectedImage ? (
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={selectedImage}
                        alt="Waste preview"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={clearImage}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-accent/50 transition-all group">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageSelect}
                        className="hidden"
                      />
                      <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Camera className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold mb-1">Click to upload photo</span>
                      <span className="text-muted-foreground text-sm">or drag and drop</span>
                    </label>
                  )}
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Select Waste Category
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {wasteCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                          selectedCategory === category.id
                            ? "border-primary bg-accent shadow-soft"
                            : "border-border hover:border-primary/50 hover:bg-accent/50"
                        }`}
                      >
                        <span className="text-2xl mb-1">{category.icon}</span>
                        <span className="text-xs font-medium text-foreground">{category.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-center gap-3 bg-accent/50 rounded-xl p-4 mb-8">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-foreground">Pickup Location</span>
                    <p className="text-sm text-muted-foreground">Your current location will be used for pickup</p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={!selectedImage || !selectedCategory}
                >
                  <Upload className="w-5 h-5" />
                  Submit Waste Request
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  <Package className="w-4 h-4 inline mr-1" />
                  Average pickup time: 24-48 hours
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
