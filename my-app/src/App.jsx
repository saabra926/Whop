import {Routes, Route } from "react-router-dom";
import Game from "./pages/Game";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
  );
}
