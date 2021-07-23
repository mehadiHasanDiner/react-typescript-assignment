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
      name: "James",
      age: 35,
      email: "abc@email.com",
      url: "http://172.16.50.8/SAM-FTP/South%20Indian%20Movies/HINDI%20DUBBED/%282021%29/Mosagallu%20%282021%29%20720p%20%5BDual%20CAM%20Audio%5D/a_AL_.jpg",
      remarks: "Hello Wrold",
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
