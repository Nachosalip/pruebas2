import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput, Button, Image} from 'react-native';
import React, { useState } from 'react';


 const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const verificarIngreso = ()=>{
      setEmail(email.toLowerCase());
      setPassword(password.toLowerCase());
      console.log(email);
      console.log(password);
      if(email=='nacho' && password=='salip'){
      navigation.navigate('Screen01');
      }
      else{
        alert('o el mail o la contraseña estan mal (mail: nacho, contraseña: salip)');
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
      <Button        
      title="Presioname"        
      onPress={() =>verificarIngreso()} />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
       backgroundColor: "#FFC0CB",
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
      }
  });
  export {LoginScreen}