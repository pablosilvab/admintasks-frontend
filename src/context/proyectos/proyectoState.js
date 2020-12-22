import React, { useReducer } from "react";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../../types";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import {v4 as uuidv4} from 'uuid'

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Delivery" },
    { id: 3, nombre: "Soluciones informáticas" },
  ];

  const initialState = {
    formulario: false,
    proyectos: [],
    errorformulario: false
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto

    })
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
