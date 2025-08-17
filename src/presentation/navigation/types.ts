import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
}


export type UseNavigationType = StackNavigationProp<RootStackParamList>