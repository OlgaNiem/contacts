import Container from "@/components/Container";
import { FormEvent, useEffect, useState } from "react";

type ContactDefinition = {
  name: string,
  phoneNumber: string
}

export default function HomePage() {

  const [nameInput, setNameInput] = useState('');
  const [phonenumberInput, setPhoneNumberInput] = useState('');

  const [contacts, setContacts] = useState<ContactDefinition[]>([]);

  useEffect(() => {
    // Load from localstorage and setContacts...
    setContacts([
      {name: 'Anna Andersson', phoneNumber: '0501234567'},
      {name: 'Peter Petersson', phoneNumber: '0501234567'},
      {name: 'Johan Johansson', phoneNumber: '0501234567'}
    ]);
  }, []);

  const onAdd = (e: FormEvent) => {
    e.preventDefault();

    setContacts([
      ...contacts,
      {name: nameInput, phoneNumber: phonenumberInput}
    ]);

    setNameInput('');
    setPhoneNumberInput('');

    // Spara till localstorage
  }

  const onRemove = (index: number) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);

    // Spara till localstorage
  }

  return (
    <Container>
      <h1>Contacts</h1>

      <form onSubmit={onAdd}>
        <label>
          <span>Name</span>
          <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
        </label>
        <label>
          <span>Phonenumber</span>
          <input type="text" value={phonenumberInput} onChange={e => setPhoneNumberInput(e.target.value)} />
        </label>
        <button>Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phonenumber</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, i) => (
            <tr key={contact.name + contact.phoneNumber}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td><button onClick={() => onRemove(i)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}