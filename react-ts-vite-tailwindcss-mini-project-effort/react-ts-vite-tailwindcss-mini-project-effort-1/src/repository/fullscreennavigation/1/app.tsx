import React from "react";
// import './style.css';

const CustomApp = () => {
    const header = ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5'];
    const data = [
        ['Content 1', 'Content 1', 'Content 1', 'Content 1', 'Content 1'],
        ['Content 2', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 3', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 4', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        ['Content 5', 'Content 2', 'Content 2', 'Content 2', 'Content 2'],
        // Add more data as needed
      ];
    

  return (
    <>
    <Header/>;
    <Menu/>
    </>
  );
};

export default CustomApp;

const Header: React.FC = () => {
    return (
      <header id="header">
        <nav className="nav">
          <button className="toggle-menu">
            <span></span>
          </button>
        </nav>
      </header>
    );
  };

  const Menu: React.FC = () => {
    return (
      <div id="menu" className="">
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Pricing
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <footer className="menu-footer">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-twitter fa-fw"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope fa-fw"></i>
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  };
  