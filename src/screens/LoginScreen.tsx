import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// ✅ Add LoginSuccess and Language here too
type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  LoginSuccess: undefined;
  Language: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    // You can place login API here; currently just navigating
    console.log('Logging in with:', { username, password });

    // Navigate to LoginSuccess screen
    navigation.navigate('LoginSuccess');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.inner}>
          <Text style={styles.logo}>Face2Finance</Text>

          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.loginText}>Login to continue</Text>

          <Text style={styles.label}>Enter your username or phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="designwithdesi"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="DesignWITHdesigners12345"
              placeholderTextColor="#999"
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <Icon
                name={hidePassword ? 'eye-off' : 'eye'}
                size={22}
                color="#555"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>LOG IN</Text>
          </TouchableOpacity>

          <Text style={styles.signup}>
            Don’t have an account?{' '}
            <Text
              style={styles.signupLink}
              onPress={() => navigation.navigate('SignUp')}
            >
              Sign up now
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f1f3ff',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  inner: {
    marginTop: 60,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'monospace',
    marginBottom: 20,
    color: '#000',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3333ff',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#3333ff',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3333ff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: -40,
  },
  forgot: {
    textAlign: 'right',
    color: '#3333ff',
    fontSize: 13,
    marginBottom: 30,
  },
  loginBtn: {
    backgroundColor: '#3333ff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signup: {
    textAlign: 'center',
    color: '#000',
  },
  signupLink: {
    color: '#3333ff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
