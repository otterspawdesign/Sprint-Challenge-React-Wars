import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import StarCard from "./components/StarCard";
import "./App.css";
import axios from "axios";

const App = () => {
  const [cardData, setCardData] = useState();
  const [pageState, setPageState] = useState(1);
  const [prevState, setPrevState] = useState("hidden");
  const [nextState, setNextState] = useState("hidden");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageState}`)
      .then(res => setCardData(res.data.results))
      .catch(err => console.log(err));
  }, [pageState]);

  useEffect(() => {
    pageState <= 1 ? setPrevState("hidden") : setPrevState("visible");
    pageState >= 9 ? setNextState("hidden") : setNextState("visible");
  }, [pageState]);

  return (
    <div className="App">
      <Container className="header-container">
        <h1 className="Header">React Wars</h1>
        <Container className="arrow-container">
          <p
            className="prev"
            onClick={() => {
              setPageState(pageState - 1);
            }}
            style={{ visibility: prevState }}
          >
            prev
          </p>
          <p
            className="next"
            onClick={() => {
              setPageState(pageState + 1);
            }}
            style={{ visibility: nextState }}
          >
            next
          </p>
        </Container>
      </Container>
      <Container className="main-container">
        {cardData &&
          cardData.map(res => {
            return <StarCard data={res} key={res.created} />;
          })}
      </Container>
    </div>
  );
};

export default App;
