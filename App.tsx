/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "./global.css"
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ScreenLayout from "./src/presentation/components/ScreenLayout";
import NavigationStack from "./src/presentation/navigation/NavigationStack";
import AuthProvider from "./src/presentation/context/AuthProvider";
import Toast from "react-native-toast-message";
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <AuthProvider>
          <NavigationStack />
          <Toast />
        </AuthProvider>
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
