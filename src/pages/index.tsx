import React from "react";
import logo from "../logo.png";
//@ts-ignore
import menu from "../mammos-menu.pdf";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href={menu} download>
          Menu
        </a>
      </header>
    </div>
  );
};
