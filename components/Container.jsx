import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Container = ({
  children,
  scroll = null,
  otherStyles = null,
  bg,
  pb = true,
  ph = true,
  centerContent
}) => {
  return (
    <SafeAreaView
      className={`bg-[${
        bg ? bg : "#F3F5F7"
      }] pt-6  flex-1 h-full ${otherStyles}`}
    >
      <StatusBar style="dark" />
        <ScrollView
          contentContainerStyle={{
            minHeight: "100%",
            paddingHorizontal: ph ? 14 : 0,
            position: "relative",
            paddingBottom: pb ? 85 : 0,
            backgroundColor: bg ? bg : "#F3F5F7",
            justifyContent: centerContent ? 'center' : null
          }}
        >
          {children}
        </ScrollView>
      
    </SafeAreaView>
  );
};

export default Container;
