import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <h1>Contact Chips Example</h1>
      <ContactChipsList />
    </>
  );
};

export default CustomApp;

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactChipProps {
  contact: Contact;
  onDelete: (contactID: number) => void;
}

const ContactChipsList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleDeleteContact = (contactId: number) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Function to add a new contact
  const addContact = (name: string, email: string) => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name,
      email,
    };
    setContacts((prevContact) => [...prevContact, newContact]);
  };

  return (
    <div className="contact-chips-list">
      {contacts.map((contact) => (
        <ContactChip
          key={contact.id}
          contact={contact}
          onDelete={handleDeleteContact}
        />
      ))}
    </div>
  );
};

const ContactChip: React.FC<ContactChipProps> = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div className="contact-chip">
      <span>Name: {contact.name}</span> {/* Displaying name */}
      <span>Email: {contact.email}</span> {/* Displaying email */}
      <span className="delete-icon" onClick={handleDelete}>
        ×
      </span>
    </div>
  );
};
