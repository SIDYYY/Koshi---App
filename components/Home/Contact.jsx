import { View, Text } from "react-native";
import React from "react";
import Title from "../Title";
import ContentContainer from "../ContentContainer";

const Contact = () => {
  return (
    <ContentContainer ph={false}>
      <Title title="Contact Us" more={false} mt={false} px="p-5" />
      <View className="border-b border-gray_border mb-5" />
      <View className="px-5 mb-5">
        <Text className="font-pregular text-base text-gray_inactive">Email:</Text>
        <Text className="font-pregular text-black text-base">
          contact@koshi.com
        </Text>
        <Text className="font-pregular text-base text-gray_inactive">Phone:</Text>
        <Text className="font-pregular text-black text-base">
          +63 961 4596 991
        </Text>
        <Text className="font-pregular text-base text-gray_inactive">Address:</Text>
        <Text className="font-pregular text-black text-base">
          1234 Car Street, Auto City, AC 56789
        </Text>
      </View>
    </ContentContainer>
  );
};

export default Contact;
