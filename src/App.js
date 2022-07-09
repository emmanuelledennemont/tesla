import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Sections from "./components/Sections";

function App() {
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);

  return (
    <div className="App">
      <>
        <Header titleProject="Tesla Project" />
        <Sections
          choice1={choice1}
          setChoice1={setChoice1}
          choice2={choice2}
          setChoice2={setChoice2}
        />
      </>
    </div>
  );
}

export default App;
