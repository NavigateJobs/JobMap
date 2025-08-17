import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import { useNavigation } from '@react-navigation/native'
import { UseNavigationType } from '../../navigation/types'

const OnboardingScreen = () => {
    const navigation = useNavigation<UseNavigationType>()
  return (
    <ScreenLayout>
        <Text>LoginScreen</Text>
        <Pressable onPress={() => navigation.navigate("JobsScreen")}><Text>go to jobs screen</Text></Pressable>
    </ScreenLayout>
  )
}

export default OnboardingScreen