import { useState } from "react";
import Form from "./components/Form";
import { useQuery } from "react-query";
import AppStyles from "./styles/global.module.css";

const apiData = async (param: string) => {
  const data = await fetch(`https://api.datamuse.com/words?rel_syn=${param}`);
  return data.json();
};
function App() {
  //const [synonyms, setSynonyms] =useState("");

  const [validSearch, setValidSearch] = useState("");
  const { isLoading, error, data } = useQuery<
    boolean,
    any,
    { word: string; score: number; tags: string }[]
  >(["wordsData", validSearch], () => apiData(validSearch));
  console.log(data);
  return (
    <div className={AppStyles.App}>
      <h1>Search For Synonyms</h1>
      <Form setValidSearch={setValidSearch} />
      {isLoading || !data ? (
        <div>Nothing Yet...</div>
      ) : (
        <div>
          {data.map((word) => (
            <p key={word.score + word.word}>{word.word}</p>
          ))}
        </div>
      )}
      <footer className={AppStyles.gotoTop}>
        <ul className={AppStyles.footer}>
          <a href="#word">
            <li>
              <button>Top</button>
            </li>
          </a>
          <a target="_blank" href="https://github.com/MapieMamunhe">
            <li>Mapie Mamunhe - Github</li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default App;
