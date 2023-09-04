import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native';
import Menu from '../components/Menu';

const Screen03 = ({navigation}) => {
   
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Screen03</Text>
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
  });
export {Screen03}