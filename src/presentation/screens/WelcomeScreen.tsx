import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ScreenLayout from '../components/ScreenLayout'
import { useNavigation } from '@react-navigation/native'
import { UseNavigationType } from '../navigation/types'

const WelcomeScreen = () => {
    const navigation = useNavigation<UseNavigationType>()
  return (
    <ScreenLayout>
      <Text>WelcomeScreen</Text>
      <Pressable onPress={() => navigation.navigate("LoginScreen")}><Text>go to login screen</Text></Pressable>
    </ScreenLayout>
  )
}

export default WelcomeScreen