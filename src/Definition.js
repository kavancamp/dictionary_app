import React from "react";
import Synonym from "./Synonym";
export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>
                <span className="definition-section">
                  {definition.definition}{" "}
                </span>
                <br />
                <em className="example-section">{definition.example}</em>
                <Synonym synonyms={definition.synonyms} />
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
