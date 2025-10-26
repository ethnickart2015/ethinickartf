import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our collection? We'd love to hear from you.
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-6 rounded-lg bg-card border border-border elegant-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
            <a
              href="tel:+919999999999"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 99999 99999
            </a>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border elegant-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
            <a
              href="mailto:hello@elegance.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              hello@elegance.com
            </a>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border elegant-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-sm">
              123 Fashion Street
              <br />
              Mumbai, India
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border elegant-hover">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Social</h3>
            <div className="flex justify-center gap-4 mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://wa.me/919999999999?text=Hi! I have a question about your collection.",
                "_blank"
              )
            }
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 touch-manipulation"
          >
            Contact via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
