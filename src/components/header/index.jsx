import "./index.css";

export function Header() {
  return (
    <header className="container--header">
      <img src="/logo.png" alt="logo do timer" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Histórico</a>
      </nav>
    </header>
  );
}
