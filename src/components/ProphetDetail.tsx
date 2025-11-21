import { type Prophet } from "@shared/prophets-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Book } from "lucide-react";
import starIcon from "@assets/generated_images/Islamic_star_icon_53aa1c9e.png";

interface ProphetDetailProps {
  prophet: Prophet;
}

export default function ProphetDetail({ prophet }: ProphetDetailProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 pb-6 border-b">
        <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 p-4 flex items-center justify-center">
          <img src={starIcon} alt="" className="h-full w-full object-contain opacity-70" />
        </div>
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2" data-testid="text-prophet-name">
            {prophet.nameEnglish}
          </h1>
          <p className="font-arabic text-3xl md:text-4xl text-muted-foreground" lang="ar" dir="rtl" data-testid="text-prophet-name-arabic">
            {prophet.nameArabic}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span data-testid="text-prophet-period">{prophet.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span data-testid="text-prophet-location">{prophet.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Book className="h-4 w-4 text-muted-foreground" />
            <span data-testid="text-prophet-quran">{prophet.quranMentions} Quranic mentions</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-4">Biography</h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-biography">
              {prophet.biography}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold mb-4">Teachings</h2>
            <ul className="space-y-3">
              {prophet.teachings.map((teaching, index) => (
                <li key={index} className="flex gap-3" data-testid={`text-teaching-${index}`}>
                  <span className="text-accent mt-1">•</span>
                  <span className="text-muted-foreground">{teaching}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold mb-4">Key Events</h2>
          <div className="space-y-4">
            {prophet.keyEvents.map((event, index) => (
              <Card key={index} data-testid={`card-event-${index}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      {index + 1}
                    </Badge>
                    <span data-testid={`text-event-title-${index}`}>{event.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground" data-testid={`text-event-description-${index}`}>
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
