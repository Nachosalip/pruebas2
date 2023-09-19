import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from '../components/buttonReutilizable';
import UsuarioService from "../class/UsuarioService";

const Screen01 = ({navigation}) => {
  
  const verCredenciales = async ()=>{
   let credenciales = await UsuarioService.obtenerCredenciales();
   console.log(credenciales, "credenciales");
   alert(`userName:${credenciales.userName} password: ${credenciales.password}`);
  }
    return (
     <View style={styles.container}>
      <Text style={styles.text}>Screen01</Text>
      <BotonReutilizable
       onPress={verCredenciales}          
       style={styles.CredencialesStyle}          
       texto="ver credenciales"
      />
      <Menu navigation={navigation}/>
     </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#4BB434"
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    CredencialesStyle: {
      width: "75%",
      backgroundColor: "#0B4CB0",
      paddingVertical: 12,
      marginTop: 15,
      marginBottom: 15,
      
    }
  });

export {Screen01}