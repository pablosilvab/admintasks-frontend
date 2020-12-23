import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <h2>Tus proyectos</h2>
      <ul className="listado-proyectos">
        <TransitionGroup></TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListadoProyectos;
