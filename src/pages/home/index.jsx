import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import "./index.css";

export function HomePage() {
  return (
    <>
      <div className="container--home">
        <NewCycle />
        <Timer />
        <Button variant="primary">Começar</Button>
      </div>
    </>
  );
}
