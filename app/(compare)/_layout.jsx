import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const CompareLayout = () => {
  // const TabIcon = ({ icon, color, name, focused }) => {
  //   return (
  //     <View className="items-center justify-center gap-2">
  //       <Image
  //         source={icon}
  //         className="h-6 w-6"
  //         resizeMode="contain"
  //         tintColor={color}
  //       />
  //       <Text
  //         className={`${
  //           focused
  //             ? "font-semibold text-[#ECAE36]"
  //             : "font-normal text-[#9b9b9b]"
  //         } text-xs`}
  //       >
  //         {name}
  //       </Text>
  //     </View>
  //   );
  // };
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ECAE36",
          tabBarInactiveTintColor: "#9B9B9B",
          tabBarStyle: {
            height: 40,
          },
        }}
      >
        <Tabs.Screen
          name="brand"
          options={{
            headerShown: false,
            title: "Brand",
          }}
        />
        <Tabs.Screen
          name="model"
          options={{
            headerShown: false,
            title: "Model",
          }}
        />
        <Tabs.Screen
          name="variant"
          options={{
            headerShown: false,
            title: "Variant",
          }}
        />
      </Tabs>
    </>
  );
};

export default CompareLayout;
