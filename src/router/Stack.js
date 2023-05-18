import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import DetailsScreen from '../views/DetailsScreen';
import ProfileScreen from '../views/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import ListUsers from '../views/ListUsers'
import {  View , SafeAreaView, StatusBar, Text, Button, TouchableNativeFeedback} from 'react-native';
import CreateScreen from '../views/CreateScreen';
import AboutScreen from '../views/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1,  marginTop:StatusBar.currentHeight }}>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={ProfileScreen} />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen}
            screenOptions={{}}
            options={{
              title: 'Details',
              headerBackTitleVisible: false,
            }}
            />
    </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  );
};

const HomeStack = () => {

  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List User') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'New') {
            iconName = focused ? 'add-outline' : 'add-sharp';
          }
          else if (route.name === 'About') {
            iconName = focused ? 'information-outline' : 'information-sharp';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="List User" component={ListUsers} options={{ headerShown: false }} />
      <Tab.Screen name="New" component={CreateScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default App;
