import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleData, setPeopleData] = useState();

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        // console.log(response.data);
        setPeopleData(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  if (!peopleData) return <h3>Fetching data...</h3>

  // console.log(peopleData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {peopleData.results.map(person => {
        return <Person person={person} key={person.name}/>
      })}
    </div>
  );
}

export default App;
