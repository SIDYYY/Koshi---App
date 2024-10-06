import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import icons from "../../constants/icons";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { router } from "expo-router";
import SelectCar from "../../components/Compare/SelectCar";

const Compare = () => {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const { car, slot } = {};
    if (car && slot !== undefined) {
      if (slot === 1) {
        setCar1(car);
      } else if (slot === 2) {
        setCar2(car);
      }
    }
  }, []);

  const handleComparePress = () => {
    if (car1 && car2) {
      navigation.navigate("Both", { car1, car2 });
    } else {
      Alert.alert("Error", "Please select two cars to compare.");
    }
  };

  return (
    <Container centerContent={true} pb={false}>
      <View className="">
        <View className="items-center">
          <Text className="font-black text-2xl">Car Comparison Tool</Text>
          <Text className="max-w-[90%] text-base text-center mt-2">
            Not decided on a new vehicle yet? You can compare 2 cars using our
            dynamic car comparison tool.
          </Text>
        </View>

        <View className="flex-row justify-between mb-8 mt-10">
          <SelectCar />
          <SelectCar />
        </View>

        <Button
          label="Compare Cars"
          onPress={handleComparePress}
          disabled={true}
          complete={isComplete}
        />
      </View>
    </Container>
  );
};

export default Compare;
