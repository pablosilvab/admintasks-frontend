import React, { useContext, Fragment } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <Fragment>
      <li>
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => proyectoActual(proyecto.id)}
        >
          {proyecto.nombre}
        </button>
      </li>
    </Fragment>
  );
};

export default Proyecto;
