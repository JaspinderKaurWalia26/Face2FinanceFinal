import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ViewToken,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type Slide = {
  id: string;
  title: string;
  description: string;
  image: any;
};

const slides: Slide[] = [
  {
    id: '1',
    title: 'Master Your Money',
    description: 'Learn budgeting, saving, and investment — one step at a time.',
    image: require('../assets/piggy.png'),
  },
  {
    id: '2',
    title: 'Stay Safe Online',
    description: 'Detect and avoid frauds like OTP scams and phishing traps.',
    image: require('../assets/mobile.png'),
  },
  {
    id: '3',
    title: 'Learn Your Way',
    description: 'Get personalized tips based on your age, income, and goals.',
    image: require('../assets/shield.png'),
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen'>;

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Slide>>(null);
  const navigation = useNavigation<NavigationProp>();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Login'); // ✅ go to Login instead of Welcome
    }
  };

  const handleSkip = () => {
    navigation.replace('Login'); // ✅ Skip also goes to Login
  };

  const onViewRef = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <Text style={styles.logo}>Face2Finance</Text>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: currentIndex === index ? '#007AFF' : '#ccc' },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex === slides.length - 1 ? 'Start' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#007AFF',
  },
  slide: {
    width,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 30,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  nextBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  nextText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
