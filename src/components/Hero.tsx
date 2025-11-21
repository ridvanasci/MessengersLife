import heroPattern from "@assets/generated_images/Islamic_geometric_hero_background_d2f6b9d0.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeroProps {
  onSearch?: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
    const prophetsSection = document.getElementById("prophets");
    if (e.target.value && prophetsSection) {
      prophetsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 mx-auto px-4 py-16 text-center md:px-6">
        <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          The Prophets in Islamic Tradition
        </h1>
        <p className="mb-2 text-lg text-white/90 md:text-xl">
          Exploring the lives of 25 Messengers of Allah
        </p>
        <p className="mb-8 font-arabic text-xl text-white/80 md:text-2xl" lang="ar" dir="rtl">
          استكشاف حياة خمسة وعشرين رسولاً من رسل الله
        </p>

        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for a prophet..."
              data-testid="input-hero-search"
              className="h-12 pl-10 text-base bg-white/95 backdrop-blur"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
