import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator'; // Adjust the path if needed

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Age'>;

const AgeSelectionScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your age group?</Text>
      {['Below 18', '18-30', '31-50', 'Above 50'].map((ageGroup, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => navigation.navigate('QuizHome')} // ✅ Navigate to your final screen or dashboard
        >
          <Text style={styles.optionText}>{ageGroup}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AgeSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
});
