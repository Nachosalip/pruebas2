import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import {SafeAreaView} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from '../components/buttonReutilizable';
import UsuarioService from "../class/UsuarioService";

const Screen02 = ({navigation}) => {
  
  const eliminarCredenciales = async ()=>{
    let seElimino = await UsuarioService.eliminarCredenciales();
    if(seElimino==true){
      ToastAndroid.show('Se eliminaron las credenciales', ToastAndroid.SHORT);;
    }
   }
    return (
     
    <View style={styles.container}>
      <Text style={styles.text}>Screen02</Text>
      <BotonReutilizable
       onPress={eliminarCredenciales}          
       style={styles.EliminarCredencialesStyle}          
       texto="eliminarCredenciales"
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
      backgroundColor:"#2361C6"
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    EliminarCredencialesStyle: {
      width: "75%",
      backgroundColor: "#B8D529",
      paddingVertical: 12,
      marginTop: 15,
      marginBottom: 15,
      
    }
  });
  export {Screen02}