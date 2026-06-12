// app/signup.tsx
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

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Navigate to language selection after sign up
    router.replace('/language-selection');
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.mobileCard}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Header section with back button and left-aligned title */}
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
              <Text style={styles.title}>Create your account</Text>
              <Text style={styles.subtitle}>{"Start your language journey today ✨"}</Text>
            </View>

            {/* Centered card content */}
            <View style={styles.cardContainer}>
              {/* Mascot Image */}
              <Image
                source={images.mascotAuth}
                style={styles.mascot}
                resizeMode="contain"
              />

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                  style={styles.input} 
                  value={email} 
                  onChangeText={setEmail} 
                  placeholder="alex@gmail.com" 
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput 
                    style={styles.passwordInput} 
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={setPassword} 
                    placeholder="••••••••" 
                    placeholderTextColor="#94A3B8"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>

              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              <TouchableOpacity style={styles.social}>
                <Ionicons name="logo-google" size={20} color="#EA4335" style={styles.socialIcon} />
                <Text style={styles.socialText}>Continue with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.social}>
                <Ionicons name="logo-facebook" size={20} color="#1877F2" style={styles.socialIcon} />
                <Text style={styles.socialText}>Continue with Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.social}>
                <Ionicons name="logo-apple" size={20} color="#000000" style={styles.socialIcon} />
                <Text style={styles.socialText}>Continue with Apple</Text>
              </TouchableOpacity>

              <View style={styles.footerRow}>
                <Text style={styles.footerText}>{"Already have an account? "}</Text>
                <TouchableOpacity onPress={() => router.push('/signin')}>
                  <Text style={styles.signInText}>Log in</Text>
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
  flex: { 
    flex: 1 
  },
  scrollContent: { 
    paddingHorizontal: 24, 
    paddingTop: 16,
    paddingBottom: 40,
    flexGrow: 1 
  },
  headerSection: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 16,
  },
  title: { 
    fontSize: 32, 
    fontFamily: 'Nunito_800ExtraBold', 
    color: '#0F172A', 
    textAlign: 'left',
    marginBottom: 4
  },
  subtitle: { 
    fontSize: 16, 
    color: '#64748B', 
    textAlign: 'left'
  },
  cardContainer: { 
    width: '100%', 
    maxWidth: 400, 
    alignItems: 'center',
    alignSelf: 'center'
  },
  mascot: { 
    width: 160, 
    height: 160, 
    marginBottom: 10 
  },
  inputWrapper: { 
    width: '100%', 
    marginBottom: 10 
  },
  label: { 
    fontSize: 14, 
    fontFamily: 'Nunito_700Bold', 
    color: '#64748B', 
    marginBottom: 6 
  },
  input: { 
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
    paddingRight: 16,
    backgroundColor: '#F8FAFC' 
  },
  passwordInput: { 
    flex: 1, 
    height: '100%', 
    paddingHorizontal: 16, 
    fontSize: 16,
    color: '#0F172A'
  },
  signUpButton: { 
    width: '100%', 
    height: 48, 
    backgroundColor: '#5F5CF0', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 8 
  },
  btnText: { 
    color: '#ffffff', 
    fontFamily: 'Nunito_700Bold', 
    fontSize: 18 
  },
  divider: { 
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
    color: '#94A3B8', 
    fontSize: 14,
    paddingHorizontal: 12
  },
  social: { 
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
  socialText: { 
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
  signInText: { 
    fontSize: 15, 
    fontFamily: 'Nunito_700Bold', 
    color: '#5F5CF0' 
  }
});