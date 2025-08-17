import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'


const Stack = createNativeStackNavigator<RootStackParamList>()
const NavigationStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack