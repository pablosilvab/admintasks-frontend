import React, { Fragment } from "react";
import Proyecto from "../proyectos/Proyecto";

const Listado = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Delivery" },
    { nombre: "Soluciones informáticas" },
  ];

  return (
    <Fragment>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto proyecto={proyecto} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Listado;
