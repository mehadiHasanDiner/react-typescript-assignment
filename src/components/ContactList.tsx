import React from 'react';
import { IState as Props } from "../App"

interface IProps {
  people: Props["people"]
}

const ContactList: React.FC<IProps> = ({ people}) => {

  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        
          <li key={person.name} className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
          </div>
          
          <p>{person.email}</p>
          <p>{person.age} years old</p>
          <p className="List-note">{person.remarks}</p>
          
        </li>
        
      )
    })
  }

  return (
    <ul >
      {renderList()}
    </ul>
  );
};

export default ContactList;