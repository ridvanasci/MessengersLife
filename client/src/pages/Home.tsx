import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProphetTimeline from "@/components/ProphetTimeline";
import ProphetCard from "@/components/ProphetCard";
import Footer from "@/components/Footer";
import { prophetsData, type Prophet } from "@shared/prophets-data";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedTimelineProphet, setSelectedTimelineProphet] = useState<number | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [minQuranMentions, setMinQuranMentions] = useState(0);

  const handleLearnMore = (prophet: Prophet) => {
    setLocation(`/prophet/${prophet.id}`);
  };

  const filteredProphets = prophetsData.filter((prophet) => {
    const matchesSearch = 
      searchQuery === "" ||
      prophet.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prophet.nameArabic.includes(searchQuery) ||
      prophet.knownFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prophet.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesQuranFilter = prophet.quranMentions >= minQuranMentions;

    return matchesSearch && matchesQuranFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={setSearchQuery} />
      <main className="flex-1">
        <Hero onSearch={setSearchQuery} />

        <section id="timeline" className="py-8">
          <ProphetTimeline
            prophets={prophetsData}
            selectedId={selectedTimelineProphet}
            onSelect={(prophet) => {
              setSelectedTimelineProphet(prophet.id);
              const element = document.getElementById("prophets");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </section>

        <section id="prophets" className="container mx-auto px-4 py-16 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The 25 Prophets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore the lives, teachings, and legacies of the prophets mentioned in the Quran.
              Each brought divine guidance to their people and exemplified faith, patience, and devotion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search prophets by name or location..."
                  data-testid="input-prophets-search"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" data-testid="button-filters">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Prophets</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Minimum Quran Mentions</Label>
                        <span className="text-sm text-muted-foreground">{minQuranMentions}+</span>
                      </div>
                      <Slider
                        value={[minQuranMentions]}
                        onValueChange={(values) => setMinQuranMentions(values[0])}
                        max={50}
                        step={5}
                        data-testid="slider-quran-mentions"
                      />
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSearchQuery("");
                        setMinQuranMentions(0);
                      }}
                      data-testid="button-clear-filters"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {filteredProphets.length < prophetsData.length && (
              <p className="text-sm text-muted-foreground mt-4">
                Showing {filteredProphets.length} of {prophetsData.length} prophets
              </p>
            )}
          </div>

          {filteredProphets.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No prophets found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setMinQuranMentions(0);
                }}
                data-testid="button-clear-search"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProphets.map((prophet) => (
                <ProphetCard
                  key={prophet.id}
                  prophet={prophet}
                  onLearnMore={handleLearnMore}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
