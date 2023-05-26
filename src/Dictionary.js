import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
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
        <h2>📖</h2>
        <h1>What word would you like to learn?</h1>
        {searchForm}
        <Result results={results} />
      </div>
    );
  } else {
    return (
      <div>
        <h3>Sorry- No data available for this term</h3>
        {searchForm}
      </div>
    );
  }
}
