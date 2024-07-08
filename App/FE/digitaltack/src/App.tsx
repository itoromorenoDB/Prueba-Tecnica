import "./App.css";
import RetroGamesGrid from "./RetroGamesModule/RetroGamesGrid/RetroGamesGrid";
import { useState } from "react";
import MainNavbar from "./SharedModule/MainNavbar";
import RetroGamesForm from "./RetroGamesModule/RetroGamesForm/RetroGamesForm";

function App() {
  const [query, setQuery] = useState<string>("");
  return (
    <div>
      <MainNavbar />
      <div className="main-layout">
        <RetroGamesForm setQuery={setQuery}/>
        <RetroGamesGrid query={query} />
      </div>
    </div>
  );
}

export default App;
