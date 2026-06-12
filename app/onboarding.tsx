import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mobileCard}>

        {/* Top Header Section */}
        <View style={styles.logoHeader}>
          <Image
            source={require('../assets/images/mascot-welcome.png')}
            style={styles.miniLogo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>lingua</Text>
        </View>

        {/* Hero Content Section */}
        <View style={styles.mainContent}>
          <Text style={styles.heroHeading}>
            Your AI language {'\n'}
            <Text style={styles.highlightText}>teacher.</Text>
          </Text>

          <Text style={styles.subHeading}>
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>

          {/* Central Character & Speech Bubbles */}
          <View style={styles.characterContainer}>
            <View style={[styles.bubble, styles.bubbleLeft]}>
              <Text style={styles.bubbleText}>Hello!</Text>
            </View>
            <View style={[styles.bubble, styles.bubbleRightTop]}>
              <Text style={[styles.bubbleText, { color: '#6C5CE7' }]}>¡Hola!</Text>
            </View>
            <View style={[styles.bubble, styles.bubbleRightBottom]}>
              <Text style={[styles.bubbleText, { color: '#FF7675' }]}>你好!</Text>
            </View>

            <Image
              source={require('../assets/images/mascot-welcome.png')}
              style={styles.largeMascot}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Footer Navigation Dots & Button */}
        <View style={styles.footerSection}>
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity
            style={styles.getStartedBtn}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.btnText}>Get Started</Text>
            <Text style={styles.btnArrow}>〉</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#111214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileCard: {
    width: '100%',
    maxWidth: 420,
    height: '100%',
    maxHeight: 850,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  logoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  miniLogo: {
    width: 32,
    height: 32,
  },
  logoText: {
    fontSize: 22,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#1E1E24',
  },
  mainContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  heroHeading: {
    fontSize: 32,
    fontFamily: 'Nunito_800ExtraBold',
    textAlign: 'center',
    color: '#1E293B',
    lineHeight: 40,
    marginBottom: 12,
  },
  highlightText: {
    color: '#6C5CE7',
  },
  subHeading: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  characterContainer: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  largeMascot: {
    width: 180,
    height: 180,
    position: 'absolute',
    bottom: 0,
  },
  bubble: {
    position: 'absolute',
    backgroundColor: '#F1F2F6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  bubbleText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#2F3542',
  },
  bubbleLeft: { left: 20, top: 40 },
  bubbleRightTop: { right: 30, top: 20 },
  bubbleRightBottom: { right: 15, top: 100 },
  footerSection: {
    width: '100%',
    alignItems: 'center',
    gap: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
  },
  activeDot: {
    width: 24,
    backgroundColor: '#6C5CE7',
  },
  getStartedBtn: {
    backgroundColor: '#6C5CE7',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
  },
  btnArrow: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
    position: 'absolute',
    right: 24,
  },
});