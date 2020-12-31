import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {};
    case REGISTRO_ERROR:
      return {};
    case OBTENER_USUARIO:
      return {};
    case LOGIN_EXITO:
      return {};
    case LOGIN_ERROR:
      return {};
    case CERRAR_SESION:
      return {};
    default:
      return state;
  }
};
