import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO } from "../../types/index";

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
    tareasProyecto: null
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
