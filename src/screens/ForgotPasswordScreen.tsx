import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  VerifyOtp: { phoneNumber: string };
};

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      Alert.alert('Invalid', 'Please enter a valid 10-digit phone number.');
      return;
    }

    // Trigger OTP logic here (mocked)
    Alert.alert('OTP Sent', `OTP sent to ${phoneNumber}`);

    // Navigate to VerifyOtp screen
    navigation.navigate('VerifyOtp', { phoneNumber });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeIcon}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.heading}>Forgot your Password?</Text>
          <Text style={styles.subtext}>
            Enter your phone number and we'll send an OTP to reset your password.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            maxLength={10}
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSendOTP}>
            <Text style={styles.sendText}>Send OTP ➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  closeIcon: {
    marginLeft: 20,
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D1D1D',
  },
  subtext: {
    fontSize: 14,
    color: '#555',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  sendBtn: {
    marginTop: 30,
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
