import { View, Text } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";


const CompareLayout = () => {
  const [carChosen, setCarChosen] = useState({
    brand: "",
    model: "",
    variant: "",
  });
  const TabIcon = ({ name, focused }) => {
    return (
      <View
        className={`items-center justify-center gap-2 h-[90%] w-full ${
          focused ? "border-t-4 border-[#ECAE36]" : null
        }`}
      >
        <Text
          className={`${
            focused ? "font-black text-[#ECAE36]" : "font-normal text-[#9b9b9b]"
          } text-base uppercase`}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
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
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Brand" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="model"
          options={{
            headerShown: false,
            title: "Model",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Model" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="variant"
          options={{
            headerShown: false,
            title: "Variant",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Variant" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default CompareLayout;
