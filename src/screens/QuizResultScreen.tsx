import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizResult'>;

const QuizResultScreen: React.FC<Props> = ({ navigation, route }) => {
  const { correct, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>🎉 Quiz Completed!</Text>
      <Text style={styles.scoreText}>
        You answered {correct} out of {total} questions correctly.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizHome')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  resultText: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  scoreText: { fontSize: 18, textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#6A5ACD', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
