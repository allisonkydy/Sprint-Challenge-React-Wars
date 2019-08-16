import React from 'react';

function Person(props) {
   return (
      <div>
         <h2>Name: {props.person.name}</h2>
         <ul>
            <li>Birth year: {props.person.birth_year}</li>
            <li>Gender: {props.person.gender}</li>
            <li>Hair Color: {props.person.hair_color}</li>
            <li>Eye Color: {props.person.eye_color}</li>
            <li>Skin Color: {props.person.skin_color}</li>
            <li>Height: {props.person.height}cm</li>
            <li>Mass: {props.person.mass}kg</li>
         </ul>
      </div>
   )
}

export default Person;
