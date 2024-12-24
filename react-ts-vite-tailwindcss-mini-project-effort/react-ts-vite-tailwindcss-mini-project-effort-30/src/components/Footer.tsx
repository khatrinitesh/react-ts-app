import React from "react";

const Footer: React.FC = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer class="footer bg-black p-[10px] text-white">
      <div className="container mx-auto">
        <p>&copy; copyright {fullYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
