import React from "react";
import "./Result.css";
import Definition from "./Definition";

export default function Result(props) {
  function utterance(event) {
    let vocate = new SpeechSynthesisUtterance(`${props.results.word}`);
    speechSynthesis.speak(vocate);
  }
  console.log(props.meaning);
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h2>{props.results.word}</h2>

          <div>
            <button 
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="sound"
              onClick={utterance}
            >
              Listen <i className="fa-solid fa-volume-high ms-1"></i>
            </button>{" "}
            {"   "}
            <span className="text">{props.results.phonetic} </span>
          </div>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definition meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
