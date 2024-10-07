import { View, Text } from "react-native";
import React from "react";
import Title from "../Title";

const Contact = () => {
  return (
    <View className=" rounded-lg mt-4 bg-white py-4">
      <Title title="Contact Us" more={false} />
      <View className="px-4">
        <Text className="text-base text-gray">Email:</Text>
        <Text className="text-black text-base">contact@koshi.com</Text>
        <Text className="text-base text-gray">Phone:</Text>
        <Text className="text-black text-base">+63 961 4596 991</Text>
        <Text className="text-base text-gray">Address:</Text>
        <Text className="text-black text-base">1234 Car Street, Auto City, AC 56789</Text>
      </View>
    </View>
  );
};

export default Contact;
