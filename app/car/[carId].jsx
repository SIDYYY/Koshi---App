import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../components/Container";
import ford from "../../lib/ford";
import BackButtonHeader from "../../components/BackButtonHeader";
import ContentContainer from "../../components/ContentContainer";
import Title from "../../components/Title";
import { BlurView } from "expo-blur";
import icons from "../../constants/icons";
import SpecHighlight from "../../components/Car/SpecHighlight";
const Car = () => {
  const { carId } = useLocalSearchParams();
  const [carInfo, setCarInfo] = useState(null);
  const [variants, setVariants] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCarById = (carId) => {
      const foundCar = ford.find((car) => car.id === Number(carId));
      setCarInfo(foundCar);
      setLoading(false); // Set loading to false after fetching
    };

    if (carId) {
      getCarById(carId);
    }
  }, [carId]); // Add carId as a dependency

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Hi</Text>
      </Container>
    );
  }

  return (
    <Container ph={false} pt={false} pb={false}>
      <View>
        <View className="w-full h-[300px] rounded-b absolute -z-10">
          <Image
            source={{ uri: carInfo.image }}
            className="w-full h-full overflow-hidden"
            resizeMode="cover"
          />
        </View>
        <BlurView
          className="h-full px-[14px]"
          intensity={70}
          experimentalBlurMethod="dimezisBlurView"
          tint="dark"
        >
          <BackButtonHeader title="Car Details" type="carInfo" />
          <View className="h-[270px]">
            <Image
              source={{ uri: carInfo.image }}
              className="w-full h-[200px] m-auto rounded-xl"
              resizeMode="cover"
            />
          </View>
          <View className="bg-main_bg_grey rounded-t-2xl flex-1 -mx-[14px] px-[14px]">
            <Text className="font-black text-3xl mt-8">{carInfo.name}</Text>
            <ContentContainer otherStyles="space-y-3">
              <View className="flex-row items-center space-x-4 justify-between">
                <Text className="">Price Range:</Text>
                <Text className="bg-light_grey border border-gray px-2 py-1 rounded-[4px]">
                  {carInfo.price}
                </Text>
              </View>
              <View className="flex-row items-center space-x-4 justify-between">
                <Text className="">Body Type:</Text>
                <Text className="bg-light_grey border border-gray px-2 py-1 rounded-[4px]">
                  {carInfo.bodyType}
                </Text>
              </View>
              <View className="items-center space-x-4 justify-between">
                <Text className="">Transmission:</Text>
                <View className="flex-row gap-4">
                  <Text className="bg-light_grey border border-gray px-2 py-1 rounded-[4px]">
                    Gasoline
                  </Text>
                  <Text className="bg-light_grey border border-gray px-2 py-1 rounded-[4px]">
                    Diesel
                  </Text>
                </View>
              </View>
            </ContentContainer>

            <ContentContainer otherStyles="relative pb-4">
              <View className="flex-row pt-4 ">
                <SpecHighlight
                  icon={icons.fuelType}
                  label="Gasoline"
                  bg="#FFEBED"
                  title="Fuel Type"
                  iconColor="#F44435"
                />
                <SpecHighlight
                  icon={icons.seat}
                  bg="#FFF9C5"
                  label="7"
                  title="Seats"
                  iconColor="#F57E16"
                />
                <SpecHighlight
                  icon={icons.transmission}
                  label="Automatic"
                  bg="#E8F5E9"
                  title="Transmission"
                  iconColor="#439F48"
                />
              </View>
              <View className="flex-row border-light_grey_border border-t items-center space-x-4  mt-8 pt-4 justify-between">
                <Text className="">Full Details</Text>
                <Image
                  source={icons.arrow}
                  className="h-4 w-4 -scale-[1]"
                  resizeMode="contain"
                />
              </View>
            </ContentContainer>
          </View>
        </BlurView>
      </View>
    </Container>
  );
};

export default Car;
