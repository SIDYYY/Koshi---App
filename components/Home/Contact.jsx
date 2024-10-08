import { View, Text } from "react-native";
import React from "react";
import Title from "../Title";
import ContentContainer from "../ContentContainer";

const Contact = () => {
  return (
    <ContentContainer ph={false} >
      <Title title="Contact Us" more={false} px={true} />
      <View className="px-4">
        <Text className="text-base text-gray">Email:</Text>
        <Text className="text-black text-base">contact@koshi.com</Text>
        <Text className="text-base text-gray">Phone:</Text>
        <Text className="text-black text-base">+63 961 4596 991</Text>
        <Text className="text-base text-gray">Address:</Text>
        <Text className="text-black text-base">1234 Car Street, Auto City, AC 56789</Text>
      </View>
    </ContentContainer>
  );
};

export default Contact;
