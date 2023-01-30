import React from "react"
import Card from "./Card";
import contacts from "./contacts";

function CreateCard(contact){
  return(
    <Card 
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}
function ContactApp() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default ContactApp;