import ProphetDetail from "../ProphetDetail";
import { prophetsData } from "@shared/prophets-data";

export default function ProphetDetailExample() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <ProphetDetail prophet={prophetsData[2]} />
    </div>
  );
}
