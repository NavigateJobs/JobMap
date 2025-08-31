import { View, Text } from 'react-native'
import React from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import Icon from 'react-native-vector-icons/FontAwesome';
import MainButton from '../../components/MainButton';
import { useProviderAuth } from '../../context/AuthProvider';

const JobsScreen = () => {
  const {handleLogout} = useProviderAuth()
  return (
    <ScreenLayout>
       <Text>JobsScreen</Text>
       <MainButton label='Log Out' onPress={handleLogout} />
    </ScreenLayout>
  )
}

export default JobsScreen