import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Existing Screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import PasswordResetSuccessScreen from '../screens/PasswordResetSuccessScreen';
import SignUpScreen from '../screens/SignUpScreen';

// New Screens
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import LanguageScreen from '../screens/LanguageScreen';
import LevelScreen from '../screens/LevelSelectionScreen';
import DailyGoalScreen from '../screens/DailyGoalScreen';
import AgeScreen from '../screens/AgeSelectionScreen';

// Quiz Screens
import QuizHomeScreen from '../screens/QuizHomeScreen';
import QuizMapScreen from '../screens/QuizMapScreen';

import QuizExplanationScreen from '../screens/QuizExplanationScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import { QuizData } from '../../services/gemini';

// Navigation Param List
export type RootStackParamList = {
  Splash: undefined;
  OnboardingScreen: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  ResetPassword: undefined;
  PasswordResetSuccess: undefined;
  SignUp: undefined;

  LoginSuccess: undefined;
  Language: undefined;
  Level: undefined;
  DailyGoal: undefined;
  Age: undefined;

  QuizHome: undefined;
  QuizMap: undefined;
  QuizQuestion: { level: number };
  QuizExplanation: {
    question: QuizData;
    chosenIndex: number;
  };
  QuizResult: {
    correct: number;
    total: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Authentication & Onboarding Screens */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccessScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Post-login & Onboarding Journey */}
        <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="DailyGoal" component={DailyGoalScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />

        {/* Quiz Screens */}
        <Stack.Screen name="QuizHome" component={QuizHomeScreen} />
        <Stack.Screen name="QuizMap" component={QuizMapScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
