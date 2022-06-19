import React from "react";

import Header from "./components/Header";
import List from "./components/List";

import menu from "./menu.json";

const App = function () {
  const { drinks, food } = menu;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <h3>Drinks</h3>
          <h3>Food</h3>
        </nav>
        <ul>
          <List list={drinks} />
          <List list={food} />
        </ul>
      </main>
    </div>
  );
};

export default App;
