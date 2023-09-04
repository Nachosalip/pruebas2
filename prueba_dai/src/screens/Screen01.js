import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native';
import Menu from '../components/Menu';

const Screen01 = ({navigation}) => {
   
    return (
     <View style={styles.container}>
      <Text style={styles.text}>Screen01</Text>
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
  });

export {Screen01}