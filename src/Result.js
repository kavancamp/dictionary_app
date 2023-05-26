import React from "react";
import './Result.css'
import Definition from "./Definition";

export default function Result(props) {
  console.log(props.meaning);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
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
