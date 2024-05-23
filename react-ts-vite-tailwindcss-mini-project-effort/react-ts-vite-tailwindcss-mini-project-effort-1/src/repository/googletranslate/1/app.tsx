import React, { useState } from 'react';
import { translate } from '@vitalets/google-translate-api';
// import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
        <Translate/>
    </>
  )
}

export default CustomApp

const Translate: React.FC = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
  
    const handleTranslate = async () => {
        try {
          const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(text)}&target=${targetLanguage}`);
          const data = await response.json();
          setTranslatedText(data.data.translations[0].translatedText);
        } catch (error) {
          console.error('Translation error:', error);
          setTranslatedText('Translation failed');
        }
      };
  
    return (
      <div>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
      <div>
        <label>Target Language:</label>
        <input value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} />
      </div>
    </div>
    );
  };