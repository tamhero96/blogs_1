import * as React from "react";
import { Router } from "./router/Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
