import ProphetCard from "../ProphetCard";
import { prophetsData } from "@shared/prophets-data";

export default function ProphetCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProphetCard
        prophet={prophetsData[0]}
        onLearnMore={(prophet) => console.log("Learn more about", prophet.nameEnglish)}
      />
    </div>
  );
}
