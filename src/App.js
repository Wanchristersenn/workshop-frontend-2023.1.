import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Cards";
import Pagination from "./components/pagination/Pagination";
import Filtros from "./components/Filtros/Filtros"; 
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Card/CardDetails";


function App() {
 
  
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

       

        
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App"> 
    
      <h1 className="text-center mb-3">Características</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filtros
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;