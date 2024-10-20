import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Container = ({
  children,
  scroll = true,
  otherStyles = null,
  bg = "#F3F5F7",
  pb = 85,
  ph = 16,
  pt = 24,
  centerContent,
}) => {
  return (
    <SafeAreaView className={`flex-1 h-full bg-[${bg}] ${otherStyles}`}>
      <StatusBar style="dark" />
      {scroll ? (
        <ScrollView
          contentContainerStyle={{
            minHeight: "100%",
            paddingHorizontal: ph,
            position: "relative",
            paddingBottom: pb,
            backgroundColor: bg,
            justifyContent: centerContent ? "center" : null,
            paddingTop: pt,
          }}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          className={`min-h-[100%] ${ph && "px-4"}  relative ${
            pb && "pb-[85px]"
          }`}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Container;
