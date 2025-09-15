import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
import LoginScreen from '../screens/Onboarding/OnboardingScreen'
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen'
import JobsScreen from '../screens/Jobs/JobsScreen'
import BottomTab from './bottom tab/BottomTab'
import { useProviderAuth } from '../context/AuthProvider'
import JobDetailsScreen from '../screens/Jobs/JobDetailsScreen'


const Stack = createNativeStackNavigator<RootStackParamList>()
const NavigationStack = () => {
  const {token} = useProviderAuth()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!token ?
            <>
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            </> :
            <>
              <Stack.Screen name="JobsScreen" component={BottomTab}/>
              <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen}/>
            </>
          }

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack