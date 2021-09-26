import React from 'react';
import './cards.css';
import {Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export const Cards = (props) =>
{
  return ( <div className="cards">
      {props.cardData.map((person, index) =>
      {
        return (
          <Card key={index} style={{width: "15rem"}}>
            <Card.Img variant="top" src={person.avatar} />
            <Card.Body>
                <ul>
                  <li>{person.first_name} {person.last_name}</li>
                  <li>{person.email}</li>
                  <Button variant="primary" id="btn">View</Button>
                </ul>
            </Card.Body>
          </Card>          
        );
      })}
      </div>
  );
}

export default Cards