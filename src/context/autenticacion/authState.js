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
import tokenAuth from "../../config/tokenAuth";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/auth");
      console.log(respuesta);
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      console.log(respuesta);

      dispatch({
        type: LOGIN_EXITO,
        payload: respuesta.data,
      });
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  const cerrarSesion = () =>{
    dispatch({
      type: CERRAR_SESION
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
