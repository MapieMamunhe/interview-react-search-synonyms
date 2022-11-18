import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import { useQuery } from "react-query";

const apiData = async (param: string) => {
  const data = await fetch(`http://api.datamuse.com/words?ml=${param}`);
  return data.json();
};
function App() {
  //const [synonyms, setSynonyms] =useState("");

  const [textToSearch, setTextToSearch] = useState("");
  const [validSearch, setValidSearch] = useState("");
  const { isLoading, error, data } = useQuery<
    boolean,
    any,
    { word: string; score: number; tags: string }[]
  >(["wordsData", validSearch], () => apiData(textToSearch));
  console.log(data);
  return (
    <div className="App">
      <Form textToSearch={textToSearch} setTextToSearch={setTextToSearch} />
      <input
        type="button"
        value="Search"
        onClick={() => setValidSearch(textToSearch)}
      />
      <div>
        {isLoading || !data ? (
          <>Nothing Yet...</>
        ) : (
          data.map((word) => <p key={word.score + word.word}>{word.word}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
