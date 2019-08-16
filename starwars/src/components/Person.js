import React from 'react';

function Person(props) {
   return (
      <div>
         <h2>Name: {props.person.name}</h2>
         <h3>Gender: {props.person.gender}</h3>
         <h3>Hair Color: {props.person.hair_color}</h3>
      </div>
   )
}

export default Person;
