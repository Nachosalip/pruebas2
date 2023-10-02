import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput, Button, Image} from 'react-native';
import React, { useState, useRef } from 'react';
import BotonReutilizable from '../components/buttonReutilizable';
import UsuarioService from "../class/UsuarioService";
import AlertConstantes from '../class/AlertConstantes';

 const LoginScreen = ({navigation}) => {
  const mail = "M";
  const pass = "M";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const verificarIngreso = async ()=>{
      setEmail(email.toUpperCase());
      setPassword(password.toUpperCase());
      console.log(email);
      console.log(password);
      if(email== mail && password== pass){
      UsuarioService.almacenarCredenciales(email, password);
      navigation.navigate('Screen01');
      }
      else{
        alert(AlertConstantes.AlertContraseñaInvalida);
      }
    }
    const passwordRef = useRef();
    
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
          returnKeyType='next'
          onSubmitEditing={()=>{passwordRef.current.focus();}}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="contraseña."
          onChangeText={(password) => setPassword(password)}
          ref={passwordRef} 
          secureTextEntry
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