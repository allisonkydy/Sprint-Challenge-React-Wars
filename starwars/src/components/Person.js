import React from 'react';
import styled from 'styled-components';

function Person(props) {
   const Container = styled.div`
      width: 300px;
      margin: 0 15px 20px;
      background-color: #f0f0f0;
      border-radius: 7px;
   `

   const Name = styled.h2`
      margin: 0;
      padding: 14px 0;
      background: goldenrod;
      border-radius: inherit;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
   `

   const List = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 15px 0 5px 25%;
      text-align: left;
   `

   const ListItem = styled.li`
      padding-bottom: 10px;
   `
   return (
      <Container>
         <Name>{props.person.name}</Name>
         <List>
            <ListItem>Birth year: {props.person.birth_year}</ListItem>
            <ListItem>Gender: {props.person.gender}</ListItem>
            <ListItem>Hair Color: {props.person.hair_color}</ListItem>
            <ListItem>Eye Color: {props.person.eye_color}</ListItem>
            <ListItem>Skin Color: {props.person.skin_color}</ListItem>
            <ListItem>Height: {props.person.height}cm</ListItem>
            <ListItem>Mass: {props.person.mass}kg</ListItem>
         </List>
      </Container>
   )
}

export default Person;
