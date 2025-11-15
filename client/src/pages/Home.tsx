import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProphetTimeline from "@/components/ProphetTimeline";
import ProphetCard from "@/components/ProphetCard";
import Footer from "@/components/Footer";
import { prophetsData, type Prophet } from "@shared/prophets-data";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedTimelineProphet, setSelectedTimelineProphet] = useState<number | undefined>(undefined);

  const handleLearnMore = (prophet: Prophet) => {
    console.log("Navigate to prophet detail:", prophet.nameEnglish);
    setLocation(`/prophet/${prophet.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <section id="timeline" className="py-8">
          <ProphetTimeline
            prophets={prophetsData}
            selectedId={selectedTimelineProphet}
            onSelect={(prophet) => {
              setSelectedTimelineProphet(prophet.id);
              console.log("Selected prophet from timeline:", prophet.nameEnglish);
            }}
          />
        </section>

        <section id="prophets" className="container mx-auto px-4 py-16 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The 25 Prophets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the lives, teachings, and legacies of the prophets mentioned in the Quran.
              Each brought divine guidance to their people and exemplified faith, patience, and devotion.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prophetsData.map((prophet) => (
              <ProphetCard
                key={prophet.id}
                prophet={prophet}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
