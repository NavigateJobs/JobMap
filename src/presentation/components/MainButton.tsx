import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'

type MainButtonProps = {
  label: string;
  onPress: () => void;
  loading?: boolean
  disabled?: boolean;
}

const MainButton = ({label, onPress, disabled = false, loading = false} : MainButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`
        w-full py-4 rounded-2xl flex-row items-center justify-center gap-x-2
        ${disabled ? "bg-primary-dark/50" : "bg-primary"}
      `}
    >
      <Text
        className={`
          text-textcolor-primary font-semibold text-lg
          ${disabled ? "opacity-60" : ""}
        `}
      >
        {label}
      </Text>
      {loading && <ActivityIndicator size={'small'} color={'#fff'}/>}
    </Pressable>
  )
}

export default MainButton