// app/signin.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Image } from 'react-native';
import { images } from '../constants/images';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Navigate to language selection after sign in
    router.replace('/language-selection');
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mobileCard}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Header section with back button */}
            <View style={styles.headerSection}>
              <TouchableOpacity 
                onPress={() => {
                  if (router.canGoBack()) {
                    router.back();
                  } else {
                    router.replace('/');
                  }
                }} 
                style={styles.backButton}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <Ionicons name="chevron-back" size={24} color="#0F172A" />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
              <Image
                source={images.mascotLogo}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>{"We're so excited to see you again! 👋"}</Text>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInputField}
                    placeholder="••••••••"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={20} color="#EA4335" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-facebook" size={20} color="#1877F2" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-apple" size={20} color="#000000" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
              </TouchableOpacity>

              <View style={styles.footerRow}>
                <Text style={styles.footerText}>{"Don't have an account? "}</Text>
                <TouchableOpacity onPress={() => router.push('/signup')}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    overflow: 'hidden',
    ...Platform.select({
      web: {
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 24,
      },
    }),
  },
  keyboardView: { 
    flex: 1 
  },
  scrollContent: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 24,
    paddingVertical: 30
  },
  headerSection: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 8,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  cardContainer: { 
    width: '100%', 
    maxWidth: 400, 
    alignItems: 'center' 
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 12
  },
  title: { 
    fontSize: 32, 
    fontFamily: 'Nunito_800ExtraBold', 
    color: '#0F172A', 
    textAlign: 'center',
    marginBottom: 6
  },
  subtitle: { 
    fontSize: 16, 
    color: '#64748B', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  inputWrapper: { 
    width: '100%', 
    marginBottom: 10 
  },
  inputLabel: { 
    fontSize: 14, 
    fontFamily: 'Nunito_700Bold', 
    color: '#64748B', 
    marginBottom: 6 
  },
  inputField: { 
    width: '100%', 
    height: 48, 
    borderWidth: 1.5, 
    borderColor: '#E2E8F0', 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    fontSize: 16, 
    color: '#0F172A',
    backgroundColor: '#F8FAFC' 
  },
  passwordContainer: { 
    width: '100%', 
    height: 48, 
    borderWidth: 1.5, 
    borderColor: '#E2E8F0', 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8FAFC' 
  },
  passwordInputField: { 
    flex: 1, 
    height: '100%', 
    paddingHorizontal: 16, 
    fontSize: 16,
    color: '#0F172A'
  },
  eyeIcon: { 
    paddingHorizontal: 16 
  },
  signInButton: { 
    width: '100%', 
    height: 48, 
    backgroundColor: '#5F5CF0', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 8 
  },
  signInButtonText: { 
    fontSize: 18, 
    fontFamily: 'Nunito_700Bold', 
    color: '#ffffff' 
  },
  dividerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 12, 
    width: '100%' 
  },
  dividerLine: { 
    flex: 1, 
    height: 1, 
    backgroundColor: '#E2E8F0' 
  },
  dividerText: { 
    fontSize: 14, 
    color: '#94A3B8', 
    paddingHorizontal: 12 
  },
  socialButton: { 
    flexDirection: 'row', 
    width: '100%', 
    height: 46, 
    borderWidth: 1.5, 
    borderColor: '#E2E8F0', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 8,
    backgroundColor: '#ffffff'
  },
  socialIcon: { 
    position: 'absolute', 
    left: 20 
  },
  socialButtonText: { 
    fontSize: 15, 
    fontFamily: 'Nunito_700Bold', 
    color: '#334155' 
  },
  footerRow: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  footerText: { 
    fontSize: 15, 
    color: '#64748B' 
  },
  signUpText: { 
    fontSize: 15, 
    fontFamily: 'Nunito_700Bold', 
    color: '#5F5CF0' 
  }
});