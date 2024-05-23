import React,{ useState, useRef, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default CustomApp;

interface NavbarProps{
    onSearch:(query:string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch(searchQuery);
    };
  
    return (
      <nav>
        <div className="logo">Logo</div>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
    );
  };





