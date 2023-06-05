import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// redux imports
import { Provider } from 'react-redux'
import { store } from './src/redux/redux'

// screen imports
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import Explore from './src/screens/Explore'
import Daily from './src/screens/Daily'
import ContentUploader from "./src/screens/ContentUploader";

import Ionicons from "@expo/vector-icons/Ionicons";



// navigation imports
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const DailyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Daily" component={Daily}  />
      {/* Add more screens within the "Daily" tab if needed */}
    </Stack.Navigator>
  );
}

const ExploreStack = () => {

}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Daily" component={Daily} options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
            <Ionicons name="sunny-outline" size={24} color="black" />)}}
          />
          <Tab.Screen name="Explore" component={Explore} options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />)}}
          /><Tab.Screen name ="Upload" component={ContentUploader} options={{
            headerShown: false,
            tabBarLabel: '',
          tabBarIcon: () => (
            <Ionicons name="cloud-upload-outline" size={24} color="black" />)
        }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
