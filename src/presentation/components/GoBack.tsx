import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { UseNavigationType } from '../navigation/types'
import Icon from 'react-native-vector-icons/FontAwesome';

const GoBack = () => {
    const navigation = useNavigation<UseNavigationType>()

    const handleGoBack = () => {
        navigation.goBack()
    }

  return (
    <Pressable onPress={handleGoBack} className='flex-row items-center gap-3 mb-6'>
      <Icon name='arrow-left' size={15} color={'#fff'}/>
      <Text className='text-white text-xl'>Go Back</Text>
    </Pressable>
  )
}

export default GoBack