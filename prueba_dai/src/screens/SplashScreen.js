import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import {SafeAreaView, TextInput, Button, Image, ActivityIndicator, View, StyleSheet, Text } from "react-native";
import BotonReutilizable from "../components/buttonReutilizable";
import UsuarioService from "../class/UsuarioService";


const SpashScreen = ({ navigation }) => {
  useEffect(() => {
    let usuarioCargado;
    const onLoad = async () => {
      await newPromise((resolve) => setTimeout(resolve, 5000));
    };
    onLoad();
    usuarioCargado = UsuarioService.automaticlogin();
    console.log("usuario cargado", usuarioCargado)
    if(usuarioCargado===true){
      navigation.navigate('Screen01');
    }
    else{
      navigation.navigate('LoginScreen');
    }
  
    //InvocoelmétodoasincrónicoonLoadluegodedefinirsucuerpo.
    return () => {
      //
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require("../../assets/rueda.png")} />
      </View>
      <View>
        <ActivityIndicator size="large" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    alignItems: "center",
    justifyContent: "center",
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
  },
});
export { SpashScreen };
