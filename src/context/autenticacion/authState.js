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
import clienteAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      });
    } catch (error) {
        const alerta = {
            msg: error.response.data.msg,
            categoria: 'alerta-error'
        }

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
