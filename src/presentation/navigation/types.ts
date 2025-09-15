import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    WelcomeScreen: undefined;
    OnboardingScreen: undefined;
    JobsScreen: undefined;
    JobDetailsScreen: {jobId: string}
}

export type BottomTabRootParamList = {
    Jobs: undefined;
    Map: undefined;
    Applications: undefined;
    Profile: undefined
}

export type UseNavigationType = StackNavigationProp<RootStackParamList>