import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Update if path differs

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Level'>;

const LevelSelectionScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How much do you know about Finance?</Text>
      {[...Array(4)].map((_, i) => (
        <TouchableOpacity
          key={i}
          style={styles.option}
          onPress={() => navigation.navigate('DailyGoal')}
        >
          <Text style={styles.text}>I'm a total beginner</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LevelSelectionScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 20 },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  text: { fontSize: 16 },
});
