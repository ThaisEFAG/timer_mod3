import { PropTypes } from "prop-types";
import { Header } from "../components/header";
import "./index.css";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container--template">
        <div className="container--template-contents">{children}</div>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
