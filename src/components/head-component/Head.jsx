import { useState } from "react";

import "./Head.css";


const Head = function ({darkTheme, state, handleThemeIcon}) {


  return (
    <header style={{ backgroundColor: darkTheme }}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfolios</li>
          <li>Contact</li>
        </ul>
        <div className="dark-theme" onClick={handleThemeIcon}>
          <img src={state} alt="" className="icon" />
        </div>
      </nav>
      <section className="head">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <div className="text">
          <h1>greatCodes</h1>
          <p>Hi there</p>
        </div>
      </section>
    </header>
  );
};
export default Head;
