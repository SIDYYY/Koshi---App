import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  Image,
  FlatList,
} from "react-native";
import Title from "../Title";
import reasons from "../../lib/reasons";
import ReasonsCard from "./ReasonsCard";

const WhyKoshi = () => {
  // const slideAnimLeft = useRef(new Animated.Value(-500)).current;
  // const slideAnimRight = useRef(new Animated.Value(500)).current;

  // useEffect(() => {
  //     Animated.timing(slideAnimLeft, {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }).start();
  //   }, []);

  //   useEffect(() => {
  //     Animated.timing(slideAnimRight, {
  //       toValue: 0,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }).start();
  //   }, []);
  return (
    <>
      <Title title="Why Koshi?" />
      <FlatList
        data={reasons}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-4 py-2 mx-3 mb-10">
            <ReasonsCard reasons={item} />
          </View>
        )}
        keyExtractor={(item) => item.text}
      />
      {/* Contact Information Section */}
      {/* <Text>Contact Us</Text>
      <View>
        <Text>Email: contact@koshi.com</Text>
        <Text>Phone: +1 234 567 890</Text>
        <Text>Address: 1234 Car Street, Auto City, AC 56789</Text>
      </View> */}
    </>
  );
};
export default WhyKoshi;
