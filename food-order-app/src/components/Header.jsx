import React from "react";
import headerLogo from "../assets/logo.jpg";
import Button from "../UI/Button";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerLogo} alt="header-logo" />
        <h1>Junkies Corner</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}

export default Header;
