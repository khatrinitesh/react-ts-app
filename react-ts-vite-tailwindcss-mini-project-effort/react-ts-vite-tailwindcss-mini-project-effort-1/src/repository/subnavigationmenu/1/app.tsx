import React,{useState } from "react";

const CustomApp = () => {
  const items: NavItem[] = [
    {
      title: "Home",
      submenu:['sachin','rahul','yuravj']
    },
    {
      title: "About",
      submenu: ["Submenu A", "Submenu B", "Submenu C"],
    },
    {
      title: "Contact",
      submenu: ["Submenu X", "Submenu Y", "Submenu Z"],
    },
  ];
  return (
    <>
      <NavbarApp items={items} />
    </>
  );
};

export default CustomApp;

interface NavItem {
  title: string;
  submenu:string[];
}

interface NavProps {
  items: NavItem[];
}

const NavbarApp: React.FC<NavProps> = ({ items }) => {
    const [showSubmenu, setShowSubmenu] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setShowSubmenu(index);
      };
    
      const handleMouseLeave = () => {
        setShowSubmenu(null);
      };
  return (
    <ul className="nav flex justify-center">
      {items.map((item, index) => (
        <li
          key={index}
          className="nav-item relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="#"
            className="nav-link block px-4 py-2 text-white bg-gray-600 hover:bg-gray-700"
          >
            {item.title}
          </a>
          {item.submenu && showSubmenu === index && (
            <ul className="sub-nav absolute bg-gray-600 hover:bg-gray-700">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="sub-nav-item">
                  <a
                    href="#"
                    className="sub-nav-link block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
