import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-native';


export default function Menu({navigation}) {
    
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen01')}>
            <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen02')}>
            <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen03')}>
            <Text>3</Text>
        </TouchableOpacity>
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
  });