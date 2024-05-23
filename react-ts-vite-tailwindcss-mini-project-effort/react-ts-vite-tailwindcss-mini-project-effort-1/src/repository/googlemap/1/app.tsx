import React from 'react';
// import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
        <GoogleMap/>
    </>
  )
}

export default CustomApp

const GoogleMap: React.FC = () => {
    return (
      <div>
        <h2>Google Map Example</h2>
        <iframe
          title="Google Map"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.82226805558!2d-74.11808639357953!3d40.70582563088306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990fcd32b45%3A0x27825e5468606e6!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1634745224587!5m2!1sen!2sin"
        ></iframe>
      </div>
    );
  };