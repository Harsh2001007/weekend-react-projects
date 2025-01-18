import React from "react";
import headerLogo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerLogo} alt="header-logo" />
        <h1>Junky Guy</h1>
      </div>
      <nav>
        <button>Cart</button>
      </nav>
    </header>
  );
}

export default Header;
