import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import BotonReutilizable from "../components/buttonReutilizable";

useEffect(() => {
  constonLoad = async () => {
    awaitnewPromise((resolve) => setTimeout(resolve, 5000));
  };
  onLoad();
  //InvocoelmétodoasincrónicoonLoadluegodedefinirsucuerpo.
  return () => {
    //
  };
}, []);

const SpashScreen = ({ navigation }) => {
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
