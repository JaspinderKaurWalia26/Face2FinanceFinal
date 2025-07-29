import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuizExplanation'>;
  route: { params: { question: any, chosenIndex: number } };
};

export default function QuizExplanationScreen({ navigation, route }: Props) {
  const { question, chosenIndex } = route.params;
  const isCorrect = question.correctIndex === chosenIndex;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</Text>
      <Text style={styles.explanation}>{question.explanation}</Text>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('QuizResult', {
          correct: isCorrect ? 1 : 0,
          total: 1 // Assuming one question attempt for now
        })}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  result: { fontSize:24, marginBottom:16, fontWeight:'bold' },
  explanation: { fontSize:16, textAlign:'center', marginBottom:24 },
  nextBtn: { backgroundColor:'#8558ff', padding:15, borderRadius:8 },
  nextText: { color:'#fff', fontWeight:'600' },
});
