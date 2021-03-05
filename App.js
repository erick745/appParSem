/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListTodo from './views/ListTodo.js';
import VectorIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeModules} from 'react-native';

const Tab = createBottomTabNavigator();
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  ListTodo() {
    console.log('MENU');
    return (
      <View>
        <ListTodo />
      </View>
    );
  }
  SettingsScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#34495e',
        }}>
        <Text style={{fontSize: 50, color: 'white'}}>HOME</Text>
        <Text style={{fontSize: 15, color: 'white'}}>
          Utilice este boton para ver los cambios:
        </Text>
        <View>
          <Button
            title="Reset"
            color="gray"
            onPress={() => {
              NativeModules.DevSettings.reload(); //reiniciar app
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'LISTA DE TAREAS': {
                  if (focused) {
                    return (
                      <VectorIcons name="assignment" size={25} color="black" />
                    );
                  } else {
                    return (
                      <VectorIcons name="assignment" size={25} color="grey" />
                    );
                  }
                }
                case 'RESET APP': {
                  if (focused) {
                    return (
                      <VectorIcons name="refresh" size={25} color="black" />
                    );
                  } else {
                    return (
                      <VectorIcons name="refresh" size={25} color="grey" />
                    );
                  }
                }
              }
            },
          })}>
          <Tab.Screen name="RESET APP" component={this.SettingsScreen} />
          <Tab.Screen name="LISTA DE TAREAS" component={this.ListTodo} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
