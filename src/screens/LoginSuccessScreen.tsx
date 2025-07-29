import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginSuccess: undefined;
  Language: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginSuccess'>;
};

const LoginSuccessScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="check-circle-outline" size={100} color="#3333ff" />
        <Text style={styles.title}>You have login successfully!!</Text>
        <Text style={styles.subtitle}>
          Congratulations, you have login successfully. You can start using the app.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Language')}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3333ff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginSuccessScreen;
