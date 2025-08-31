import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import { useNavigation } from '@react-navigation/native'
import { UseNavigationType } from '../../navigation/types'
import MainButton from '../../components/MainButton'

const WelcomeScreen = () => {
    const navigation = useNavigation<UseNavigationType>()
  return (
      <View className='flex-1 justify-center items-center bg-background-surface'>
        <View className='flex-col items-center mb-10'>
          <Text className='text-textcolor-secondary text-3xl mb-2'>Welcome To</Text>
          <Text className='text-textcolor-primary text-4xl'>JobLocator</Text>
        </View>
        <View className='max-w-[350px] w-full '>
          <MainButton onPress={() => navigation.navigate("OnboardingScreen")} label='Log In' />
        </View>
      </View>
  )
}

export default WelcomeScreen