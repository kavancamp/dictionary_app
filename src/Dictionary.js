import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";
import axios from "axios";
import "./Dictionary.css";
import { ReactComponent as Books } from "./images/books.svg";

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  // eslint-disable-next-line
  const [loaded, setLoaded] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(url)
      .then(handleResponse)
      .catch((error) => {
        setError(error);
        console.log(error);
        alert("Invalid search, please check your spelling or try another word");
        return;
      });
    console.log(url);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function available() {
    setLoaded(true);
    search();
  }
  const searchForm = (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Search for a word"
        onChange={handleKeywordChange}
      />
    </form>
  );

  if (available) {
    return (
      <div className="Dictionary">
        <h2>
          <Books />
        </h2>
        <h1>What word would you like to learn?</h1>
        {searchForm}
        <Result results={results} />
      </div>
    );
  } else {
    loaded();
    return (
      <div className="Dictionary">
        <h2>
          <Books />
        </h2>
        <h1>What word would you like to learn?</h1>
        {searchForm}
      </div>
    );
  }
}
