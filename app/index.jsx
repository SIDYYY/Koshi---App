import { View, Text } from "react-native";
import { router } from "expo-router";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { useState } from "react";

const index = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Container>
      <View className="justify-between h-full pb-[24px]">
        <View className="space-y-4">
          <Text className="font-bold text-[40px] text-center">
            Car Buying,{" "}
            <Text className="text-yellow-500 underline">Simplified</Text>
          </Text>
          <Text className="text-center text-xl">
            Compare prices on new & used cars from official dealers across the
            Philippines
          </Text>
        </View>
        <View>
          <Text className="text-[#9b9b9b] text-[14px] text-center mb-4">
            Explore, compare and find the perfect car.
          </Text>
          {/* <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            status={!isLoading}
            customRoute="/home"
            label="Log-in"
          /> */}


          <Button
            label="Get Started"
            otherStyles="bg-black"
            onPress={() => {
              router.replace("/home");
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default index;
