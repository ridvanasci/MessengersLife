import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import starIcon from "@assets/generated_images/Islamic_star_icon_53aa1c9e.png";
import { type Prophet } from "@shared/prophets-data";

interface ProphetCardProps {
  prophet: Prophet;
  onLearnMore?: (prophet: Prophet) => void;
}

export default function ProphetCard({ prophet, onLearnMore }: ProphetCardProps) {
  return (
    <Card
      className="group hover-elevate active-elevate-2 transition-all overflow-visible"
      data-testid={`card-prophet-${prophet.id}`}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/10 p-3 flex items-center justify-center">
          <img src={starIcon} alt="" className="h-full w-full object-contain opacity-70" />
        </div>
        <h3 className="font-heading text-2xl font-semibold" data-testid={`text-name-english-${prophet.id}`}>
          {prophet.nameEnglish}
        </h3>
        <p className="font-arabic text-xl text-muted-foreground" lang="ar" dir="rtl" data-testid={`text-name-arabic-${prophet.id}`}>
          {prophet.nameArabic}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground min-w-20">Period:</span>
            <span className="text-foreground" data-testid={`text-period-${prophet.id}`}>{prophet.period}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground min-w-20">Location:</span>
            <span className="text-foreground" data-testid={`text-location-${prophet.id}`}>{prophet.location}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted-foreground min-w-20">Known for:</span>
            <span className="text-foreground" data-testid={`text-known-for-${prophet.id}`}>{prophet.knownFor}</span>
          </div>
        </div>

        <div className="flex items-center justify-center pt-2">
          <Badge variant="secondary" data-testid={`badge-quran-mentions-${prophet.id}`}>
            Mentioned {prophet.quranMentions}× in Quran
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onLearnMore?.(prophet)}
          data-testid={`button-learn-more-${prophet.id}`}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
