import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  ResetPassword: undefined;
  VerifyOtp: { phoneNumber: string };
};

type VerifyOtpRouteProp = RouteProp<RootStackParamList, 'VerifyOtp'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const VerifyOtpScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<VerifyOtpRouteProp>();
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter a 6-digit OTP.');
      return;
    }

    // Trigger verification logic here (mocked)
    Alert.alert('Success', 'OTP verified!');

    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to {route.params.phoneNumber}
      </Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        maxLength={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#F5F6FF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
