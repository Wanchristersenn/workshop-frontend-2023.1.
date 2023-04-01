import React from "react";
import FiltrosBTN from "../FiltrosBTN";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Humano",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mitológico",
    "Desconhecido",
    "Animal",
    "Doença",
    "Robo",
    "Cronenberg",
    "Planeta",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Espécies
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => {
            return (
              <FiltrosBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;