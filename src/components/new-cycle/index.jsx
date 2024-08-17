// form
import "./index.css";
export function NewCycle() {
  return (
    <div className="container--new-cycle">
      <label htmlFor="task">Vou trabalhar em:</label>
      <input type="text" id="task" placeholder="Definir timer..." />

      <label htmlFor="minutesAmount">Durante:</label>
      <input
        type="number"
        id="minutesAmount"
        placeholder="Seu tempo de foco aqui..."
      />
      <span>minutos.</span>
    </div>
  );
}
