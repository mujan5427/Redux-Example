import React from 'react';

// Use object destructuring syntax
// Extracting specify variable from Props Object that passed
const Link = ({active, children, changeVisibility}) => {

  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href="#" onClick={
      (event) => {
        event.preventDefault();
        changeVisibility();
      }
    }
    >
      {children}
    </a>
  );
};

export default Link
