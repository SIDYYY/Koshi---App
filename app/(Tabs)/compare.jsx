import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import icons from "../../constants/icons";
import Container from "../../components/Container";
import { Shadow } from "react-native-shadow-2";
// import 3 from "../../lib/shadow-distance";
import Button from '../../components/Button'
const Compare = () => {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);

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

  const handleSelectCar = (slot) => {
    navigation.navigate("List", { slot }); // Pass slot num correctly
    console.log("Slot #", slot);
  };

  const handleComparePress = () => {
    if (car1 && car2) {
      navigation.navigate("Both", { car1, car2 });
    } else {
      Alert.alert("Error", "Please select two cars to compare.");
    }
  };

  return (
    <Container scroll={true}>
      <View className=" items-center">
        <Text className="font-black text-2xl">Car Comparison Tool</Text>
        <Text className="max-w-[90%] text-base text-center mt-2">
          Not decided on a new vehicle yet? You can compare 2 cars using our
          dynamic car comparison tool.
        </Text>
      </View>

      <View className="flex-row  justify-center mb-8 mt-14">
        <Shadow className="p-8 rounded-lg mr-8" distance={3} >
          <TouchableOpacity onPress={() => handleSelectCar(1)}>
            {car1 ? (
              <Image source={{ uri: car1.image }} style={styles.carImage} />
            ) : (
              <Image
                source={icons.plus1}
                className="w-20 h-20"
                resizeMode="contain"
              />
            )}
            <Text>{car1 ? car1.model : "Select Car 1"}</Text>
          </TouchableOpacity>
        </Shadow>
        {/* py-8 flex-1 border justify-center items-center space-y-2 */}
        <Shadow className="p-8 rounded-lg" distance={3}>
          <TouchableOpacity onPress={() => handleSelectCar(1)}>
            {car1 ? (
              <Image source={{ uri: car1.image }} style={styles.carImage} />
            ) : (
              <Image
                source={icons.plus1}
                className="w-20 h-20"
                resizeMode="contain"
              />
            )}
            <Text>
              {car1 ? car1.model : "Select Car 1"}
            </Text>
          </TouchableOpacity>
        </Shadow>
      </View>

      <Button label="Compare Cars" onPress={handleComparePress} disabled={true} otherStyles="bg-black" />

    </Container>
  );
};

export default Compare;
