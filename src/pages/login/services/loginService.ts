import { Auth } from "../interfaces/auth.interface";
import axios from "../../../config/axios";
import Cookies from "js-cookie"
export const loginService = async (user: Auth): Promise<string | null> => {
  try {
    const response = await axios.post("api/login", user);
    const token = response.data.token;
    if (token) {
      Cookies.set("token", token);
      return null; 
    } else {
      return "Credenciales inválidas";
    }
  } catch (error) {
    return "Error en la solicitud de inicio de sesión";
  }
};