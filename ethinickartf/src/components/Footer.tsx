import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Elegance
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium kurthis that blend traditional craftsmanship with
              contemporary design. Your destination for timeless elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        link.toLowerCase().replace(" ", "")
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Information</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Shipping & Delivery</li>
              <li className="text-muted-foreground text-sm">Returns & Exchange</li>
              <li className="text-muted-foreground text-sm">Privacy Policy</li>
              <li className="text-muted-foreground text-sm">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Elegance. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> for fashion
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
