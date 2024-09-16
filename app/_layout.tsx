import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <NavigationContainer independent={true}>
        <Stack initialRouteName="(Tabs)">
          <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="List" options={{ title: 'Choose a Car Brand for Comparison' }} />
          <Stack.Screen name="Model" options={{ title: 'Choose a Car Model for Comparison' }} />
          <Stack.Screen name="Both" options={{ title: 'Choose Model for Comparison' }} />
          <Stack.Screen name="Variant" options={{ title: 'Choose Model Variant for Comparison' }} />
        </Stack>
      </NavigationContainer>
  );
}
