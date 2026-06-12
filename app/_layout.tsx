import '../global.css';
import { Stack } from 'expo-router';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '../utils/cache';

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_am9pbnQtaGFsaWJ1dC03Ni5jbGVyay5hY2NvdW50cy5kZXYk';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Bypass font loading check for offline/restricted environments to prevent blank screens
  if (!loaded && !error) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="language-selection" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ClerkProvider>
  );
}