import React, {useState} from 'react'
import styles from '../styles/Contacts.module.css'; 

  type Contact = {
    name: string;
    phone: string;
  };
 function HomePage(){
  const [contacts, setContacts] = useState<Contact[]>([
    {name: 'Anna Andersson' , phone: '044 1234567'},
    {name: 'Peter Petersson' , phone: '050 1234567'},
    {name: 'Johan Jansson' , phone: '040 7654321'}
  ])

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const addContact = () => {
    const newContact = {name, phone};
    setContacts([...contacts, newContact]);
    setName('');
    setPhone('');
  };

  const deleteContact = (phone: string) => {
    const filteredContacts = contacts.filter((contact) => contact.phone !== phone);
    setContacts(filteredContacts);
  };

  return (
  <div className={styles.tableContainer}>
    <h1>Contacts</h1>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </td>
          <td>
            <input type="text" value={phone} placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
          </td>
          <td>
            <button onClick={addContact}>Add</button>
          </td>
        </tr>

        <tr>
          <th>Name</th>
          <th>Phone number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.phone}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => deleteContact(contact.phone)}>Delete</button>
            </td>
          </tr>
        ))}


      </tbody>
    </table>
  </div>
  )
}

export default HomePage