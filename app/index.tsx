// app/index.tsx
import { Redirect } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image } from 'react-native';
import { images } from '../constants/images';

export default function Splash() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={[styles.mobileCard, { justifyContent: 'center', alignItems: 'center' }]}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={images.mascotWelcome}
            style={styles.splashImage}
            resizeMode="contain"
          />
          <Text style={styles.splashText}>lingua</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashImage: {
    width: 140,
    height: 140,
    marginBottom: 24,
  },
  splashText: {
    fontSize: 42,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#5F5CF0',
    letterSpacing: 1,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileCard: {
    width: '100%',
    maxWidth: 420,
    height: '100%',
    maxHeight: Platform.OS === 'web' ? 850 : '100%',
    backgroundColor: '#ffffff',
    borderRadius: Platform.OS === 'web' ? 24 : 0,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'space-between',
    ...Platform.select({
      web: {
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 24,
      },
    }),
  },
});