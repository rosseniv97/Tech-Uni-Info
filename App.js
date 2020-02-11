import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Presentation from './components/Presentation';
import StartView from './components/StartView';
import GroupsView from './components/GroupsView';

const Stack = createStackNavigator();


export default function App() {

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
        <Stack.Screen
          name="GroupsView"
          component={GroupsView}
          options={{title: "Activities"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  logoContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  buttonPic: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  picButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  menueButtonText: {
    fontSize: 15,
    color: '#fff',
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  menueBar: {
    flex: 0.5,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#ggg'
  },
  menueButton: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center'
  },
  voidSpace: {
    flex: 2
  },
  /* activityItem: {
    flex:
  } */
});

