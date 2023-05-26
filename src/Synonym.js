import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  //console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <ul>
          <span className="me-1">similar: </span>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
