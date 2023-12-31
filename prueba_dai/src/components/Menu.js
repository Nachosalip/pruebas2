import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-native';


export default function Menu({navigation}) {
    
    return (
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.menuItem01} onPress={()=>navigation.navigate('Screen01')}>
            <Text style={styles.menuItem01}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem02} onPress={()=>navigation.navigate('Screen02')}>
            <Text style={styles.menuItem02}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem03} onPress={()=>navigation.navigate('Screen03')}>
            <Text style={styles.menuItem03}>3</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'f2f2f2' 

    },
    
    menuItem01:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor:'22b14c',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical:'center',
    },
    menuItem02:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor:'ed1c24',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical:'center',
    },
    menuItem03:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor:'3f48cc',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical:'center',
    },

  });