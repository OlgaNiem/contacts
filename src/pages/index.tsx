import Container from "@/components/Container";
import React, {FormEvent, useState} from 'react'

export default function HomePage(){
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [contacts, setContacts] = useState([
    {name: 'Anna Andersson' , phone: '044 1234567'},
    {name: 'Peter Petersson' , phone: '050 1234567'},
    {name: 'Johan Jansson' , phone: '040 7654321'}
  ]);

  const onAdd = (e: FormEvent) => {
    e.preventDefault();

    setContacts([
      ...contacts, 
      {name: nameInput, phone: phoneInput}
      
    ])
    setNameInput('');
    setPhoneInput('');

  }
  return (
      <Container>
        <h1>Contacts</h1>
        <form onSubmit={onAdd}>
          <label>
            <span>Name</span>
            <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
          </label>
          <label>
            <span>Phone number</span>
            <input type="text" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
          </label>
          <button>Add</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
            </tr>
            ))}
            
          </tbody>

        </table>
      </Container>
  )
}