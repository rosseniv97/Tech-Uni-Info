import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Presentation from './components/Presentation';
import StartView from './components/StartView';

const Stack = createStackNavigator();


export default function App() {
  

  let goBack = ()=>{
    if(currentPage==="picked photo"){
      setCurrentPage("main");
    } 
   
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartView"
          component={StartView}
          options={{title: "Tech-Uni-Share"}}
        />
        <Stack.Screen
          name="Presentation"
          component={Presentation}
          options={{title: "Picked picture"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
