import { View, Text } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { useUserContext } from "../../context/UserContext";

const CompareLayout = () => {
  const { color } = useUserContext();
  const TabIcon = ({ name, focused }) => {
    return (
      <View
        className={`items-center justify-center gap-2 h-[90%] w-full ${
          focused ? "border-t-2 border-green_primary" : null
        }`}
      >
        <Text
          className={`${
            focused
              ? "font-pblack text-green_primary"
              : "font-normal text-gray_inactive"
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
          tabBarActiveTintColor: color.green_primary,
          tabBarInactiveTintColor: color.gray_primary,
          tabBarStyle: {
            height: 50,
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
