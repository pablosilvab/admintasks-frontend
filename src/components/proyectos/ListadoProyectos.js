import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "./Proyecto";
import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  useEffect(() => {
    if (mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerProyectos();
     //  eslint-disable-next-line
  }, [mensaje]);

  if (proyectos.length === 0) return null;

  return (
    <Fragment>
      <h2>Tus proyectos</h2>
      <ul className="listado-proyectos">

        {alerta ?  (<div className={`alerta ${mensaje.categoria}`}>{mensaje.mensaje}</div>): null}
        <TransitionGroup></TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListadoProyectos;
