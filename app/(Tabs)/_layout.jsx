import { Animated, View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import { useUserContext } from "@/context/UserContext";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className={`items-center justify-center relative `}>
      <Image
        source={icon}
        className="h-6 w-6"
        resizeMode="contain"
        tintColor={color}
      />
      <Text
        className={`font-semibold text-4xl absolute -m-5 bottom-0  ${
          focused ? "text-green_primary" : "text-white"
        }`}
      >
        .
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { color } = useUserContext();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: color.green_primary,
          tabBarInactiveTintColor: color.gray_inactive,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: color.white,
            borderColor: color.white,
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
              <TabIcon
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
              <TabIcon
                icon={icons.compare}
                color={color}
                name="Compare "
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="find-cars"
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="best-buy"
          options={{
            headerShown: false,
            title: "Best Buy",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
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
              <TabIcon
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
