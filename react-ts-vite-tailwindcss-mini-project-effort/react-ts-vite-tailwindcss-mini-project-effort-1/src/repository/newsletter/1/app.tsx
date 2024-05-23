import React from 'react';
import './style.css';

const CustmoApp = () => {
  return (
    <>
       <SubscribeSection
        title="Subscribe"
        subtitle="Get weekly top new jobs delivered to your inbox"
        placeholder="Your email address"
        buttonText="Subscribe"
      />
    </>
  )
}

export default CustmoApp

interface SubscribeProps{
    title:string;
    subtitle:string;
    placeholder:string;
    buttonText:string;
}

const SubscribeSection: React.FC<SubscribeProps> = ({
    title,
    subtitle,
    placeholder,
    buttonText,
  }) => {
    return (
      <section className="bg-img text-center">
        <div className="container">
          <h2>
            <strong>{title}</strong>
          </h2>
          <h6 className="font-alt">{subtitle}</h6>
          <br /><br />
          <form className="form-subscribe" action="#">
            <div className="input-group">
              <input type="text" className="form-control input-lg" placeholder={placeholder} />
              <span className="input-group-btn">
                <button className="btn btn-success btn-lg" type="submit">{buttonText}</button>
              </span>
            </div>
          </form>
        </div>
      </section>
    );
  };
