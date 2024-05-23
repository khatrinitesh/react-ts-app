import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <Emailer/>
    </>
  )
}

export default CustomApp

const Emailer: React.FC = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
  
    const sendEmail = () => {
      const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = emailLink;
    };
  
    return (
      <div>
        <h2>Emailer</h2>
        <div>
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="email"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={sendEmail}>Send Email</button>
      </div>
    );
  };