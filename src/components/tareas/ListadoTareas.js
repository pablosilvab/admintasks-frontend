import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  if (!proyecto) return <h2>Selecciona un proyecto </h2>;

  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir plataformas de pago", estado: true },
    { nombre: "Elegir hosting", estado: false },
  ];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>
        Proyecto <span>{proyectoActual.nombre}</span>
      </h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto 
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
