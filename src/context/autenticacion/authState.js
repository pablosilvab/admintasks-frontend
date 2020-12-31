import React, { useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types/index";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);



  
  return (
      <authContext.Provider
      value={{
          token: state.token,
          autenticado: state.autenticado,
          usuario: state.usuario,
          mensaje: state.mensaje 
      }}>
          {props.children}
      </authContext.Provider>
  );
};
export default AuthState;
