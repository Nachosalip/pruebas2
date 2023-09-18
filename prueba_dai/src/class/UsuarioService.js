import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//npmi@react-native-async-storage/async-storage
//Definicionesdeconstantes.
const USERNAME_KEY = "KEY_USER"; //
const PASSWORD_KEY = "KEY_PASSWORD"; //
class UsuarioService {
  static login = async (userName, password) => {
    try {
      
      if (userName === "M" && password ==="M")
      {
        console.log("el username en login es:", userName);
        //almacenarCredenciales (todavia no esta hecho)

        return true;
      }
      else{
        console.log("el username en login(false) es:", userName, password);
        return false;
      }
    } catch (e) {
      // error
    }
    
  };
  static automaticlogin = async () => {
    //Obtiene las credenciales almacenadas e intenta loguearse.

    let isValid = false;
    let userPass = await this.obtenerCredenciales();
     isValid = await this.login(userPass.userName, userPass.password);
    return isValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión
  static eliminarCredenciales = async () => {};
  static almacenarCredenciales = async (userName, password) => {
    //AlmacenalascredencialesenelasyncStorage
    //(paraleerlasaliniciarlapróximavez)
  };
  static obtenerCredenciales = async () => {
    let  returnValue;
    const storedUserName = await AsyncStorage.getItem(USERNAME_KEY); 
    const storedPassword = await AsyncStorage.getItem(PASSWORD_KEY); 

    returnValue = { 
        userName: storedUserName, 
        password: storedPassword 
    };
    return returnValue;
  };
}
export default UsuarioService;
