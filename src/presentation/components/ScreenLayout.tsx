import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenLayoutProps {
    children: React.ReactNode
    insets?: ('top' | 'bottom' | 'left' | 'right')[]
}
const ScreenLayout = ({children, insets=['top', 'bottom', 'left', 'right']} : ScreenLayoutProps) => {
    const safeAreaInsets = useSafeAreaInsets()
    console.log(safeAreaInsets)

    const safeAreaStyles = {
        ...(insets.includes('top')) && ({paddingTop: safeAreaInsets.top}),
        ...(insets.includes('bottom')) && ({paddingBottom: safeAreaInsets.bottom}),
        ...(insets.includes('left')) && ({paddingLeft: safeAreaInsets.left}),
        ...(insets.includes('right')) && ({paddingRight: safeAreaInsets.right}),
        flex: 1
    }
  return (
    <View style={safeAreaStyles}>
      {children}
    </View>
  )
}

export default ScreenLayout