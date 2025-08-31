import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import ScreenLayout from '../../components/ScreenLayout'
import { useNavigation } from '@react-navigation/native'
import { UseNavigationType } from '../../navigation/types'
import LoginTab from './LoginTab'
import RegistrationTab from './RegistrationTab'
import AuthTabs from '../../components/Onboarding/AuthTabs'

type TabIndex = 0 | 1;

const OnboardingScreen = () => {
    const [tab, setTab] = useState<TabIndex>(0)

    const handleTabChange = (tabIndex: TabIndex) => {
      setTab(tabIndex)
    }
    
  return (
    <ScreenLayout>
        <View className='flex-1 px-5 justify-center items-center '>
          <View className='w-full h-[30%] items-center justify-end'>
            <Text className='text-textcolor-primary text-4xl mb-5'>JobLocator</Text>
            <AuthTabs onTabChange={handleTabChange}/>
          </View>

          <View className='w-full flex-1'>
            {tab === 0 ? <LoginTab /> : <RegistrationTab />}
          </View>
        </View>
    </ScreenLayout>
  )
}

export default OnboardingScreen