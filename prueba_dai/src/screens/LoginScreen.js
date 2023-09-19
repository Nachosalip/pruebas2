import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput, Button, Image} from 'react-native';
import React, { useState } from 'react';
import BotonReutilizable from '../components/buttonReutilizable';
import UsuarioService from "../class/UsuarioService";

 const LoginScreen = ({navigation}) => {
  const mail = "M";
  const pass = "M";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const verificarIngreso = async ()=>{
      setEmail(email.toLowerCase());
      setPassword(password.toLowerCase());
      console.log(email);
      console.log(password);
      if(email== mail && password== pass){
      UsuarioService.almacenarCredenciales(email, password);
      navigation.navigate('Screen01');
      }
      else{
        alert(`o el mail o la contraseña estan mal (mail:${mail} contraseña:'${pass}')`);
      }
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <Image source = {require("../../assets/rueda.png")}/> 
      </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="contraseña."
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      {/*<Button        
      title="Presioname"        
    onPress={() =>verificarIngreso()} />*/}
      <BotonReutilizable
      
       onPress={verificarIngreso}          
       style={styles.loginDiferente}          
       texto="Presioname"
      />

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4B4B4B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
       backgroundColor: "#4b9197",
       borderRadius: 30,
       width: "70%",
       height: 45,
       marginBottom: 20,
       alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      loginDiferente: {
        width: "75%",
        backgroundColor: "#D4AF37",
        paddingVertical: 12,
        marginTop: 15,
        marginBottom: 15,
      
    
      }
  });
  export {LoginScreen}