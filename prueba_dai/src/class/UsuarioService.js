import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//npmi@react-native-async-storage/async-storage
//Definicionesdeconstantes.
const USERNAME_KEY = "nacho"; //
const PASSWORD_KEY = "salip"; //
class UsuarioService {
  static login = async (userName, password) => {
    try {    
        await AsyncStorage.setItem(userName, password);  
    } catch(e) {    
        // error  
    }
    let isValid = false;
    returnisValid;
  };
  static automaticlogin = async () => {
    //Obtienelascredencialesalmacenadaseintentaloguearse.
    
    let isValid = false;
    return isValid;
  };
  //Eliminalascredencialesalmacenadasalcerrarsesión
  static eliminarCredenciales = async () => {};
  static almacenarCredenciales = async (userName, password) => {
    //AlmacenalascredencialesenelasyncStorage
    //(paraleerlasaliniciarlapróximavez)
  };
  staticobtenerCredenciales = async () => {
    const returnValue = { userName: storedUserName, password: storedPassword };
    return returnValue;
  };
}
export default UsuarioService;
