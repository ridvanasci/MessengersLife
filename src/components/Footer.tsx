import { Separator } from "@/components/ui/separator";
import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLocation("/privacy");
  };

  return (
    <footer className="border-t bg-card mt-16">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This educational resource explores the lives and teachings of the prophets
              in Islamic tradition, providing insights into their stories and significance.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick(e, "#")}
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#prophets" 
                  onClick={(e) => handleNavClick(e, "#prophets")}
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-prophets"
                >
                  All Prophets
                </a>
              </li>
              <li>
                <a 
                  href="#timeline" 
                  onClick={(e) => handleNavClick(e, "#timeline")}
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-timeline"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-quran">
                  The Quran
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-hadith">
                  Hadith Collections
                </a>
              </li>
              <li>
                <a href="/privacy" onClick={handlePrivacyClick} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 The Prophets in Islamic Tradition. Educational purposes only.</p>
          <p className="font-arabic" lang="ar" dir="rtl">
            بسم الله الرحمن الرحيم
          </p>
        </div>
      </div>
    </footer>
  );
}
