import { Tabs } from 'expo-router';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Correct import for tabs

const Tab = createBottomTabNavigator();


export default function TabLayout() {
  return (
    <Tabs >
      <Tab.Screen name="index" options={{ title: 'Home' }} />
      <Tab.Screen name="Compare" options={{ title: 'Compare Car' }} />
    </Tabs>
  );
}
