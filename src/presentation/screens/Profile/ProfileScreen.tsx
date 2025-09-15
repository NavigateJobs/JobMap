import { View, Text } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import { useProviderAuth } from '../../context/AuthProvider'
import MainButton from '../../components/MainButton'

const ProfileScreen = () => {
  const {handleLogout} = useProviderAuth()
  return (
    <ScreenLayout insets={['top','left','right']}>
      <View className='flex-1'>
        <Text>ProfileScreen</Text>
        <MainButton label='Log Out' onPress={handleLogout} />
      </View>
    </ScreenLayout>
  )
}

export default ProfileScreen