import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
} from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir plataformas de pago", estado: true, proyectoId: 1 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir proveedor Cloud", estado: true, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: false, proyectoId: 3 },
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

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
