import { View, Text, ActivityIndicator, Image, FlatList } from "react-native";
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
      // Simulating a delay to showcase the loading state
      setTimeout(() => {
        const foundCar = ford.find((car) => car.id === Number(carId));
        setCarInfo(foundCar);
        setVariants(foundCar.variants);
        setLoading(false); // Set loading to false after fetching data
      }, 1000); // Simulate 1 second delay
    };

    if (carId) {
      getCarById(carId);
    }
  }, [carId]); // carId as a dependency // Add carId as a dependency

  if (loading) {
    // Render the loading state
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Loading car details...</Text>
        </View>
      </Container>
    );
  }

  return (
    <Container ph={false} pt={false}>
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
            <Title title="Car Overview" more={false} />
            <ContentContainer otherStyles="space-y-3">
              <View className="">
                <Text className="">Price Range:</Text>
                <View className="flex-row space-x-4 ml-4 mt-2">
                  <Text className="bg-light_grey px-2 py-1 rounded-[4px]">
                    {carInfo.price}
                  </Text>
                </View>
              </View>
              <View className="">
                <Text className="">Body Type:</Text>
                <View className="flex-row space-x-4 ml-4 mt-2">
                  <Text className="max-w- bg-light_grey px-2 py-1 rounded-[4px]">
                    {carInfo.bodyType}
                  </Text>
                </View>
              </View>
              <View className="">
                <Text className="">Transmission:</Text>
                <View className="flex-row space-x-4 ml-4 mt-2">
                  <Text className="bg-light_grey px-2 py-1 rounded-[4px]">
                    Gasoline
                  </Text>
                  <Text className="bg-light_grey px-2 py-1 rounded-[4px]">
                    Diesel
                  </Text>
                </View>
              </View>
            </ContentContainer>
            <Title title="Variants" more={false} />
            <ContentContainer>
              <FlatList
                data={variants}
                renderItem={({ item }) => (
                  <Text>
                    {console.log(item.variant)} {item.variant}
                  </Text>
                )}
                scrollEnabled={false}
                keyExtractor={(item) => item.variant}
              />
            </ContentContainer>

            <ContentContainer otherStyles="relative pb-4">
              <View className="flex-row space-x-4 ml-4 mt-2 pt-4 ">
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
