import React from "react";
import { HomePage } from "./pages/home";
import { Layout } from "./template";

function App() {
  return (
    <>
      <Layout title="Home Page">
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
