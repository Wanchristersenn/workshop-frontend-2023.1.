import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Morto") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
            
            <header>
            <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-monsters-transparent-png-stickpng-2.png" alt="Imagem do Rick and Morty Monsters"></img>

            </header>
            


          <div className="">
            <span className="fw-bold">Historia do Rick And Morty : O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington. </span>
            
          <br></br>
          <br></br>
          <br></br>
          
          
          </div>
          <div className="">
            <span className="fw-bold">Localização:Não possue um cenário em especifico </span>
              <br></br>
              <br></br>
              <br></br>
          </div>
          <div className="">
            <span className="fw-bold">Origem:Terra </span>
              <br></br>
              <br></br>
              <br></br>
          </div>
          <div className="">
            <span className="fw-bold">Espécie:Humanos </span>
              <br></br>
              <br></br>
              <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;