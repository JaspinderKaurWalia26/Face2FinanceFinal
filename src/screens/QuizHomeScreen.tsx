import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuizHome'>;
};

export default function QuizHomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image
        source={require('../assets/new.png')}
        style={styles.banner}
        resizeMode="contain"
      />

      {/* Card Area */}
      <View style={styles.card}>
        <Text style={styles.title}>Interesting QUIZ{'\n'}Awaits You</Text>
        <Text style={styles.subtitle}>
          play quizzes with your friends{'\n'}and get various prizes
        </Text>

        {/* Pagination Dots */}
        <View style={styles.dots}>
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
        </View>

        {/* Orange Circular Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('QuizMap')}
        >
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8558ff',
    alignItems: 'center',
    paddingTop: 200, // increased from 60 → 80
  },
  banner: {
    width: '350%',
    height: 250,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
    marginTop: 30, // added to shift card lower
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e0854',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 25,
  },
  dots: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  dotActive: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fa924c',
    marginHorizontal: 5,
  },
  dotInactive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#fa924c',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -30,
    alignSelf: 'center',
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
  },
});
