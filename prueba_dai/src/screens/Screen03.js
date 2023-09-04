import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from '../components/buttonReutilizable';

const Screen03 = ({navigation}) => {
  
  const VolverAlLogin = ()=>{
    navigation.navigate('LoginScreen');
  }
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Screen03</Text>
      <BotonReutilizable
       onPress={VolverAlLogin}          
       style={styles.logoutDiferente}          
       texto="Log Out"
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
      backgroundColor:"#DB412B"
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    logoutDiferente: {
      width: "75%",
      backgroundColor: "#000000",
      paddingVertical: 12,
      marginTop: 15,
      marginBottom: 15,
      
    }
  });
export {Screen03}