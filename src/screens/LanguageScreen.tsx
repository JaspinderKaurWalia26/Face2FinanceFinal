import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation type from RootStackParamList
type LanguageScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Language'>;

const LanguageSelectionScreen = () => {
  const navigation = useNavigation<LanguageScreenNavigationProp>();

  const handleLanguageSelect = (lang: string) => {
    // You can pass the selected language as a param if needed
    navigation.navigate('Level'); // ✅ Correct

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What language would you like to learn?</Text>
      {['हिंदी', 'Punjabi', 'English'].map((lang, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleLanguageSelect(lang)}
        >
          <Text style={styles.text}>{lang}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LanguageSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  option: {
    padding: 16,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
