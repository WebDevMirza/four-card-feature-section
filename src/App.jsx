import { useState } from "react";
import "./App.css";
import "./compo/style.css";
import Card from "./compo/Card";
import Intro from "./compo/Intro";
import Data from "./Data.json";

function App() {
  const [data, setData] = useState(Data);
  const borderStyle = ["border-cyan", "border-red", "border-orange", "border-blue"];

  return (
    <main>
      <Intro />
      <div className="main-container">
        <div className="main-wrapper">
          <div className="col-1">
            <Card border={borderStyle[0]} data={data[0]} />
          </div>

          <div className="col-2">
            <Card border={borderStyle[1]} data={data[1]} />
            <Card border={borderStyle[2]} data={data[2]} />
          </div>

          <div className="col-3">
            <Card border={borderStyle[3]} data={data[3]} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
