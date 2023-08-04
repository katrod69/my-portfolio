import React from "react";

function NavBtn({ children, isActive, onClick }) {
    if (isActive) {
      return <b>{children}</b>
    }
    return (
      <button onClick= {onClick}>
        {children}
      </button>
    );
  }

  export default NavBtn;