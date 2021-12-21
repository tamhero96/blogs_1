import * as React from "react";
import { Router } from "./router/Router";
import Navbar from "./components/Nav/Nav";
import "./index.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Router />
    </div>
  );
}

export default App;
