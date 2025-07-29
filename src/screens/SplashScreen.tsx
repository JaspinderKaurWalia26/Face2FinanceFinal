import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen'); // Navigate to Onboarding first
    }, 5000); // 2-second delay
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Face2Finance</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
