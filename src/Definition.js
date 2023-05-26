import React from "react";

export default function Definition(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>
                <span className="definition">{definition.definition} </span>
                <br />
                <em className="examples">{definition.example}</em>
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
