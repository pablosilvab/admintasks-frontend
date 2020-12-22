import React, { Fragment, useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return null;

  return (
    <Fragment>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </Fragment>
  );
};

export default ListadoProyectos;
