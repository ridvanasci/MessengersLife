import { type Prophet } from "@shared/prophets-data";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProphetTimelineProps {
  prophets: Prophet[];
  selectedId?: number;
  onSelect?: (prophet: Prophet) => void;
}

export default function ProphetTimeline({
  prophets,
  selectedId,
  onSelect,
}: ProphetTimelineProps) {
  return (
    <div className="w-full border-y bg-card py-6">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-4 font-heading text-2xl font-semibold">Timeline of Prophets</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-3 pb-4">
            {prophets.map((prophet) => {
              const isSelected = selectedId === prophet.id;
              return (
                <button
                  key={prophet.id}
                  onClick={() => onSelect?.(prophet)}
                  data-testid={`button-timeline-prophet-${prophet.id}`}
                  className={`inline-flex flex-col items-center gap-2 rounded-md px-4 py-3 transition-all hover-elevate ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{prophet.nameEnglish}</div>
                    <div className="font-arabic text-xs opacity-80" lang="ar" dir="rtl">
                      {prophet.nameArabic}
                    </div>
                  </div>
                  <Badge variant={isSelected ? "secondary" : "outline"} className="text-xs whitespace-nowrap">
                    {prophet.period}
                  </Badge>
                </button>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
