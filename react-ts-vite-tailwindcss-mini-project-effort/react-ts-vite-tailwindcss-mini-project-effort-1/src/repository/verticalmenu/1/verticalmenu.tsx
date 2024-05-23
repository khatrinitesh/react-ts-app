import React from "react";
import './style.css';

const VerticalMenuApp = () => {
  // Sample menu items
  const menuItems: MenuItem[] = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Services", link: "/services" },
    { id: 4, label: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <h1>Vertical Menu Example</h1>
      <VerticalMenu items={menuItems} />
    </div>
  );
};

export default VerticalMenuApp;

//************************ step 2 */
// Menu component to render the list of menu items vertically
const VerticalMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <ul className="vertical-menu">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

//************************ step 1 */
// Define the type for menu items
interface MenuItem {
  id: number;
  label: string;
  link: string;
}

// MenuItem component to render individual menu items
const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <li>
      <a href={item.link}>{item.label}</a>
    </li>
  );
};
