import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Container = ({
  children,
  scroll = null,
  otherStyles = null,
  centerContent = false,
}) => {
  return (
    <SafeAreaView className={`bg-white flex-1 h-full ${otherStyles}`}>
      <StatusBar style="dark" />
      {scroll ? (
        <ScrollView
          contentContainerStyle={{
            minHeight: "100%",
            paddingTop: 24,
            justifyContent: centerContent ? "center" : null,
          }}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default Container;
