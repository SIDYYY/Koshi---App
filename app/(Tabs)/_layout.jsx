import { Animated, View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import { MainTabIcon } from "@/components/TabIcon";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5CB88F",
          tabBarInactiveTintColor: "#9B9B9B",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#fff",
            borderColor: "#fff",
            height: 60,
            width: "92%",
            marginHorizontal: "4%",
            marginBottom: 12,
            borderRadius: 8,
            shadowColor: "transparent", // iOS: Remove shadow color
            shadowOpacity: 0, // iOS: Make shadow invisible
            shadowOffset: { width: 0, height: 0 }, // iOS: Reset shadow offset
            shadowRadius: 0, // iOS: Remove shadow radius
            elevation: 0, // Android: Remove elevation (shadow)
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MainTabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="compare"
          options={{
            headerShown: false,
            title: "Compare",
            tabBarIcon: ({ color, focused }) => (
              <MainTabIcon
                icon={icons.compare}
                color={color}
                name="Compare "
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <MainTabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bestbuy"
          options={{
            headerShown: false,
            title: "Best Buy",
            tabBarIcon: ({ color, focused }) => (
              <MainTabIcon
                icon={icons.cart}
                color={color}
                name="Best Buy"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <MainTabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
