import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomApp = () => {
  return <div>
    <SideNav/>
  </div>;
};

export default CustomApp;

const SideNav: React.FC = () => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a onClick={toggleDropdown}>Dropdown</a>
            {isDrop && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
};

const Dropdown: React.FC = () => {
  return (
    <>
      <div className="dropdown">
        <ul>
          <li>
            <Link href="/dropdown-item1">
              <a>Dropdown Item 1</a>
            </Link>
          </li>
          <li>
            <Link href="/dropdown-item2">
              <a>Dropdown Item 2</a>
            </Link>
          </li>
          <li>
            <Link href="/dropdown-item3">
              <a>Dropdown Item 3</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
