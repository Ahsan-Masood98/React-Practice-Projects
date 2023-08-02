import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Candidates from "./components/Candidates";

function App() {
  const [candidate, setCandidate] = useState([]);
  const formDataHandler = (data) => {
    setCandidate((prevCandidates) => {
      return [...prevCandidates, data ];
    });
  };
  return (
    <div className="App">
      <Form dataHandler={formDataHandler}/>
      <Candidates persons = {candidate}/>
    </div>
  );
}

export default App;
