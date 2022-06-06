/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Variation from './components/Variation';
import Thankyou from './components/Thankyou';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './components/redux/store';


const Stack = createStackNavigator();

function MyNavigationStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>      
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Variation" component={Variation} />      
      <Stack.Screen name="Thankyou" component={Thankyou} />      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const App = () => {

  return (
    <View style={styles.container}>              
    <Provider store={Store}>
      <MyNavigationStack />
    </Provider>      
    </View> 
  );
};

const styles = StyleSheet.create({
  container :{    
      flex:1,
      backgroundColor:"#ffffff"
  }  
});

export default App;