import React from 'react'

// redux imports
import { Provider } from 'react-redux'
import { store } from './src/redux/redux'

// screen imports
import Register from './src/screens/auth/Register'
import Login from './src/screens/auth/Login'
import Explore from './src/screens/explore/Explore'
import Daily from './src/screens/daily/Daily'
import Library from './src/screens/library/Library'
import ContentUploader from './src/screens/util/ContentUploader'

// icon imports
import Ionicons from "@expo/vector-icons/Ionicons"

// navigation imports
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Daily') {
                iconName = focused ? 'sunny' : 'sunny-outline';
              } else if (route.name === 'Explore') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Library') {
                iconName = focused ? 'library' : 'library-outline';
              } else if (route.name === 'Upload') {
                iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#C56E3F',
            inactiveTintColor: '#000000',
          }}
        >
          <Tab.Screen name="Daily" component={Daily} options={{ headerShown: false}}/>
          <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false}} />
          <Tab.Screen name="Library" component={Library} options={{ headerShown: false}} />
          <Tab.Screen name="Upload" component={ContentUploader} options={{ headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
