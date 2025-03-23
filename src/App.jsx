import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [verse, setVerse] = useState("");

  useEffect(() => {
    axios
      .get("https://bible-api.com/data/web/random")
      .then((response) => {
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
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="splash-page">
      <h1>Bible Verse of the Day</h1>
      <p>{verse || "Loading..."}</p>
    </div>
  );
}

export default App;
