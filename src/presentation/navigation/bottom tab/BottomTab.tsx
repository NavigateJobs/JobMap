import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import JobsScreen from '../../screens/Jobs/JobsScreen'
import { BottomTabRootParamList } from '../types'
import MapScreen from '../../screens/Map/MapScreen'
import ApplicationsScreen from '../../screens/Applications/ApplicationsScreen'
import ProfileScreen from '../../screens/Profile/ProfileScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator<BottomTabRootParamList>()


const BottomTab = () => {
  return (
    <View className='flex-1'>
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
            let iconName = '';

            switch (route.name) {
                case 'Jobs':
                iconName = 'search';
                break;
                case 'Map':
                iconName = 'map';
                break;
                case 'Applications':
                iconName = 'file-text-o';
                break;
                case 'Profile':
                iconName = 'user';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        >
            <Tab.Screen name="Jobs" component={JobsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Applications" component={ApplicationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </View>
  )
}

export default BottomTab