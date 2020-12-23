import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
} from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir colores", estado: false, proyectoId: 1 },
      { id: 3, nombre: "Elegir plataformas de pago", estado: true, proyectoId: 1 },
      { id: 4, nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
      { id: 5, nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { id: 6, nombre: "Elegir proveedor Cloud", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Elegir hosting", estado: false, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
