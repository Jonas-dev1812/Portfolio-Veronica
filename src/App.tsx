import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <AboutMe />
      <Analytics />
    </>
  );
}

export default App;
