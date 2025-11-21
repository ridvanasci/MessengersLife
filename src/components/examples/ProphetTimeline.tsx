import ProphetTimeline from "../ProphetTimeline";
import { prophetsData } from "@shared/prophets-data";
import { useState } from "react";

export default function ProphetTimelineExample() {
  const [selected, setSelected] = useState(prophetsData[0].id);

  return (
    <div className="w-full">
      <ProphetTimeline
        prophets={prophetsData}
        selectedId={selected}
        onSelect={(prophet) => {
          setSelected(prophet.id);
          console.log("Selected prophet:", prophet.nameEnglish);
        }}
      />
    </div>
  );
}
