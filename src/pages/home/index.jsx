import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";

export function HomePage() {
  return (
    <div>
      <div className="container--header">
        <NewCycle />
        <Timer />
      </div>
    </div>
  );
}
