import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Description = ({ menu }) => {
  let { name } = useParams();
  const type = useLocation().pathname.split("/")[1];
  const items = menu[type];
  const item = items.find((item) => item.name === name);
  return (
    <>
      <h2>Gracias por tu compra</h2>
      <h3>Nombre: {item.name}</h3>
      <h4>Descripción: {item.description}</h4>
      <h5>Precio: {item.price}</h5>
    </>
  );
};

export default Description;
