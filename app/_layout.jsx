import React from "react";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import toast from "@/utils/toast-message";
import UserContext from "@/context/UserContext";
import CarContext from '../context/CarContext'

const RootLayout = () => {
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
