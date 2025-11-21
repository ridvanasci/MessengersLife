import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center">
            <h1 className="font-heading text-xl font-semibold md:text-2xl">
              The Prophets
            </h1>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              data-testid="link-home"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#prophets"
              onClick={(e) => handleNavClick(e, "#prophets")}
              data-testid="link-all-prophets"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              All Prophets
            </a>
            <a
              href="#timeline"
              onClick={(e) => handleNavClick(e, "#timeline")}
              data-testid="link-timeline"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Timeline
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search prophets..."
                data-testid="input-search"
                className="w-48 md:w-64"
                autoFocus
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                  onSearch?.("");
                }}
                data-testid="button-close-search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                data-testid="button-open-search"
                className="hidden md:flex"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, "#")}
                      data-testid="link-mobile-home"
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      Home
                    </a>
                    <a
                      href="#prophets"
                      onClick={(e) => handleNavClick(e, "#prophets")}
                      data-testid="link-mobile-all-prophets"
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      All Prophets
                    </a>
                    <a
                      href="#timeline"
                      onClick={(e) => handleNavClick(e, "#timeline")}
                      data-testid="link-mobile-timeline"
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Timeline
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
