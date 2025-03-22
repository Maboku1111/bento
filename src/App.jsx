import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [verse, setVerse] = useState("");
  const retrieveTheRandomBibleVerse = () => {
    axios
      .get("https://bible-api.com/data/web/random")
      .then((response) => {
        console.log(
          response.data.random_verse.book +
            " " +
            response.data.random_verse.chapter +
            ":" +
            response.data.random_verse.verse
        );
        setVerse(
          response.data.random_verse.book +
            " " +
            response.data.random_verse.chapter +
            ":" +
            response.data.random_verse.verse
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <button onClick={retrieveTheRandomBibleVerse}>
        Get Random Bible Verse
      </button>
      {verse && <h1>{verse}</h1>}
    </>
  );
}

export default App;
