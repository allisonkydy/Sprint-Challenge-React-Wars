import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleData, setPeopleData] = useState();
  const [page, setPage] = useState(1);

  function getCharacters(direction) {
    if (direction === "next") {
      page === 9 ? setPage(1) : setPage(page => page + 1);
    } else if (direction === "previous") {
      page === 1 ? setPage(9) : setPage(page => page - 1);
    }
  }

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        setPeopleData(response.data);
      })
      .catch(err => console.log(err))
  }, [page])

  if (!peopleData) return <h3>Fetching data...</h3>

  const PersonContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: flex-start;
  `

  const Button = styled.button`
    min-width: 100px;
    border: 2px solid black;
    background: transparent;
    padding: 10px;
    border-radius: 5px;
    margin: 0 20px 30px;
    font-weight: bold;
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
      background: white;
    }
  `

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button onClick={() => getCharacters("previous")}>Previous</Button>
      <Button onClick={() => getCharacters("next")}>Next</Button>
      <PersonContainer>
        {peopleData.results.map(person => {
        return <Person person={person} key={person.name}/>
      })}
      </PersonContainer>
    </div>
  );
}

export default App;
