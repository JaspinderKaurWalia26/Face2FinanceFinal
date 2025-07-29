import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator'; // adjust path if needed

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DailyGoal'>;

const DailyGoalScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your daily goal for practicing?</Text>
      {['5 min', '10 min', '15 min', '20 min'].map((time, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => navigation.navigate('Age')}
        >
          <Text style={styles.optionText}>{time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DailyGoalScreen;

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
