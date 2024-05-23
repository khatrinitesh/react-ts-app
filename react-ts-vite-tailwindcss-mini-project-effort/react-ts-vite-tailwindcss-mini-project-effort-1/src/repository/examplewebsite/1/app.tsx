import React from 'react';
import { Link } from 'react-router-dom';

const CustomApp = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default CustomApp

const Layout: React.FC<{ title: string }> = ({ children, title }) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };

  const Header: React.FC = () => {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  const Footer: React.FC = () => {
    return (
      <footer>
        <p>&copy; 2022 Your Website</p>
      </footer>
    );
  };

  const Home: React.FC = () => {
    return (
      <Layout title="Home">
        <h1>Welcome to our website!</h1>
        <p>This is the homepage.</p>
      </Layout>
    );
  };

  const About: React.FC = () => {
    return (
      <Layout title="About">
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </Layout>
    );
  };

  const Contact: React.FC = () => {
    return (
      <Layout title="Contact">
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
      </Layout>
    );
  };

