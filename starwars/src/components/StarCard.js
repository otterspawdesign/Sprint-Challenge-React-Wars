import React, { useState, useEffect } from "react";
import { Card, Container } from "semantic-ui-react";
import "./StarWars.css";
import axios from "axios";

const StarCard = ({ data }) => {
  const [species, setSpecies] = useState();
  const [homeworld, setHomeworld] = useState([]);
  const [charImage, setCharImage] = useState();

  useEffect(() => {
    data.species &&
      axios
        .get(data.species)
        .then(res => setSpecies(res.data.name))
        .catch(err => console.log(`Error: `, err));
  }, [data.species]);

  useEffect(() => {
    data.homeworld &&
      axios
        .get(data.homeworld)
        .then(res => setHomeworld(res.data.name))
        .catch(err => console.log(err));
  }, [data.homeworld]);

  useEffect(() => {
    data.name &&
      axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=vhALW1hxxx7qryl9h7SoUg8BmYLsmKp3&q=${
          data.name
        }-star-wars&limit=25`
        )
        .then(res => {
          setCharImage(
            res.data.data[Math.floor(Math.random() * (25 - 1 + 1)) + 0].images
              .downsized_medium.url
          );
        })
        .catch(err => console.log(err));
  }, [data.name]);

  function toggleActive(e) {
    if (e.target.innerHTML === "+") {
      e.target.innerHTML = "-";
      e.target.parentNode.parentNode.nextSibling.classList.add("active");
    } else {
      e.target.innerHTML = "+";
      e.target.parentNode.parentNode.nextSibling.classList.remove("active");
    }
  }

  return (
    <Card className="star-card">
      <Card.Header>
        <Container>
          {data.name}
          <button className="expand" onClick={e => toggleActive(e)}>
            +
          </button>
        </Container>
      </Card.Header>

      <Card.Content>
        <img className="char-image" src={charImage} alt={data.name} />
        <Card.Description>
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Homeworld:</strong> {homeworld}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Y.O.B.:</strong> {data.birth_year}
          </p>
          <p>
            <strong>Skin Color:</strong> {data.skin_color}
          </p>
          <p>
            <strong>Hair Color:</strong> {data.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {data.eye_color}
          </p>
          <p>
            <strong>Height:</strong> {data.height}
          </p>
          <p>
            <strong>Mass:</strong> {data.mass}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default StarCard;