import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
// import { fetchQuestion } from '../services/gemini'; // Optional

type QuizMapNavigationProp = NativeStackNavigationProp<RootStackParamList, 'QuizMap'>;

const levels = Array.from({ length: 10 }, (_, i) => i + 1);
const unlockedLevels = 3;

const QuizMapScreen = () => {
  const navigation = useNavigation<QuizMapNavigationProp>();
  const [loadingLevel, setLoadingLevel] = useState<number | null>(null);

  const handleLevelPress = async (level: number) => {
    setLoadingLevel(level);
    try {
      // Optional: Preload question from Gemini here
      // const question = await fetchQuestion(level);

      navigation.navigate('QuizQuestion', { level }); // or pass question too
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to load quiz. Please try again.');
    } finally {
      setLoadingLevel(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Quiz Level</Text>

      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.levelGrid}>
          {levels.map((level) => {
            const isUnlocked = level <= unlockedLevels;
            const isLoading = loadingLevel === level;

            return (
              <TouchableOpacity
                key={level}
                style={[styles.levelButton, !isUnlocked && styles.lockedLevel]}
                onPress={() => isUnlocked && handleLevelPress(level)}
                disabled={!isUnlocked || isLoading}
              >
                <Text style={[styles.levelText, !isUnlocked && styles.lockedText]}>
                  {isLoading ? 'Loading...' : isUnlocked ? `Level ${level}` : '🔒'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default QuizMapScreen;

const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 100) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8558ff',
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
    flex: 1,
  },
  levelGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 40,
  },
  levelButton: {
    width: itemSize,
    height: itemSize,
    borderRadius: 15,
    backgroundColor: '#fa924c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  lockedLevel: {
    backgroundColor: '#e0e0e0',
  },
  lockedText: {
    color: '#999',
  },
});
