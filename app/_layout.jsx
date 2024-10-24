import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import Toast from "react-native-toast-message";
import toast from "@/utils/toast-message";
import UserContext from "@/context/UserContext";
import { useFonts } from "expo-font";
import CarContext from '../context/CarContext'


const RootLayout = () => {
   const [fontsLoaded, error] = useFonts({
     "DMSans-Black": require("../assets/fonts/DMSans-Black.ttf"),
     "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
     "DMSans-ExtraBold": require("../assets/fonts/DMSans-ExtraBold.ttf"),
     "DMSans-ExtraLight": require("../assets/fonts/DMSans-ExtraLight.ttf"),
     "DMSans-Light": require("../assets/fonts/DMSans-Light.ttf"),
     "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
     "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
     "DMSans-SemiBold": require("../assets/fonts/DMSans-SemiBold.ttf"),
     "DMSans-Thin": require("../assets/fonts/DMSans-Thin.ttf"),
   });

   useEffect(() => {
     if (error) throw error;

     if (fontsLoaded) {
       SplashScreen.hideAsync();
     }
   }, [fontsLoaded, error]);

   if (!fontsLoaded) {    
     return null;
   }

   if (!fontsLoaded && !error) {
     return null;
   }
  return (
    <UserContext>
      <CarContext>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="LoanCalculator"
            options={{ title: "Loan Calculator" }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="search/[query]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="car/[carId]" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toast.toastConfig} />
      </CarContext>
    </UserContext>
  );
};

export default RootLayout;
