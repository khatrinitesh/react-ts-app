import React, { useState } from "react";
import { SearchProps } from "../../../interface/interface";

const AnimatedSearchApp: React.FC<SearchProps> = ({
  animation,
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  const animationClass = animation ? `animate-${animation}` : "";

  return (
    <>
      <form className={`search-form ${animationClass}`} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>
  );
};

export default AnimatedSearchApp;
