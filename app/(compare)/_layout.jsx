import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from '../../components/Compare/TabIcon'

const CompareLayout = () => {

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
