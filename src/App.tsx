import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export interface IState {
  people:{
    name: string;
    email: string;
    age:number;
    url:string;
    remarks?:string;
    key:string;
  }[]
}

function App() {
  const [contact, setContact] = useState<IState["people"]>([
    {
      name: "React",
      age: 10,
      email: "abc@email.com",
      url: "https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png",
      remarks: "Hello World",
      key:""
    }
  ]);

  // const [contactList, setContactList] = useState<string[]>([]);

  // console.log("contact", contact)

  // const onClick = () => {
  //   setContactList([...contactList, contact])
  // }

  // console.log("contactList", contactList)

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactList people={contact} />
      <ContactForm setContact={setContact} people={contact}></ContactForm>
    </div>
  );
}

export default App;
