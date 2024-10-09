import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import toast from "@/utils/toast-message";
import UserContext from "@/context/UserContext";
import CarContext from "@/context/CarContext"; // Use consistent import path

const App = () => {
  return (
    <UserContext>
      <CarContext>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(compare)" options={{ headerShown: false }} />
          <Stack.Screen
            name="search/[query]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="car/[carId]" options={{ headerShown: false }} />
          <Stack.Screen
            name="car/variant/[variantTier]"
            options={{ headerShown: false }}
          />
        </Stack>
      </CarContext>
    </UserContext>
  );
};

export default App;