import React from "react";

const Header = ({ title }) => {
  return (
    <header className="text-primary text-center py-3">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
