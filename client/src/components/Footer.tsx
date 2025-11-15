import { Separator } from "@/components/ui/separator";

export default function Footer() {
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
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="#prophets" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-prophets">
                  All Prophets
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-timeline">
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
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-islamic-history">
                  Islamic History
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
