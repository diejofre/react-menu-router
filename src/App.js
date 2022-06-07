import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import List from "./components/List";
import Description from "./components/Description";

import menu from "./menu.json";

const App = function () {
  const { drinks, food } = menu;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <Link to="/drinks">
            <h3>Drinks</h3>
          </Link>
          <Link to="/food">
            <h3>Food</h3>
          </Link>
        </nav>
        <ul>
          <Routes>
            <Route path="/" element={<p>Bienvenidos a nuestra tienda</p>} />
            <Route path="drinks" element={<List list={drinks} />} />
            <Route path="drinks/:name" element={<Description menu={menu} />} />
            <Route path="food" element={<List list={food} />} />
            <Route path="food/:name" element={<Description menu={menu} />} />
          </Routes>
        </ul>
      </main>
    </div>
  );
};

export default App;
