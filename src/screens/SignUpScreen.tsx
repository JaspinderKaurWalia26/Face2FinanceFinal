// src/screens/SignUpScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignUp = () => {
    if (!agree) {
      Alert.alert('Agreement Required', 'Please agree to the terms and conditions');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', "Passwords don't match");
      return;
    }

    if (!name || !phone || !password || !confirmPassword) {
      Alert.alert('Incomplete Info', 'Please fill out all fields');
      return;
    }

    // Your sign-up logic here
    console.log('Signed up with:', { name, phone, password });
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>Face2Finance</Text>
      <Text style={styles.subHeading}>Create An Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agree}
          onValueChange={setAgree}
          tintColors={{ true: '#3B82F6', false: '#ccc' }}
        />
        <Text style={styles.checkboxLabel}>Agree with Terms & Conditions</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Have an account already? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3B3B98',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#3B82F6',
  },
});

export default SignUpScreen;
