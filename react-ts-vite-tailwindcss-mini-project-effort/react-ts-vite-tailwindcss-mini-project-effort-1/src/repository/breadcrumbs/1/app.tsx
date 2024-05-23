import React from "react";

const CustomApp = () => {
  const breadcrumbs: BreadCrumbItem[] = [
    { text: "Home", link: "/" },
    { text: "Products", link: "/products" },
    { text: "Category", link: "/products/category" },
    { text: "Current Item", link: "/products/category/item" },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
};

export default CustomApp;

interface BreadCrumbItem {
  text: string;
  link: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

const Breadcrumbs: React.FC<BreadCrumbProps> = ({items}) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index === items.length - 1 ? (
                <span className="breadcrumb-current">{item.text}</span>
              ) : (
                <a href={item.link}>{item.text}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
