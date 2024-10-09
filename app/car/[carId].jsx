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
import Pill from "../../components/Pill";
import Variants from "../../components/Car/Variants";
const Car = () => {
  const { carId } = useLocalSearchParams();
  const [carInfo, setCarInfo] = useState(null);
  const [variants, setVariants] = useState();
  const [loading, setLoading] = useState(true);
  const [showCardByTier, setShowCardByTier] = useState("1");

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
                <Pill label={carInfo.price} textOnly={false} />
              </View>
              <View className="">
                <Text className="">Body Type:</Text>
                <Pill label={carInfo.bodyType} textOnly={false} />
              </View>
              <View className="">
                <Text className="">Transmission:</Text>
                <View className="flex-row ml-4 mt-2">
                  <Pill label="Gasoline" otherStyles="mr-4" />
                  <Pill label="Diesel" />
                </View>
              </View>
            </ContentContainer>
            <Title title="Variants" more={false} />
            <ContentContainer>
              <FlatList
                data={variants}
                renderItem={({ item }) => (
                  <Variants
                    variant={item}
                    isShown={showCardByTier === item.tier}
                    onPress={() =>
                      setShowCardByTier(showCardByTier === item.tier ? null : item.tier)
                    }
                  />
                )}
                scrollEnabled={false}
                
                keyExtractor={(item) => item.tier}
              />
            </ContentContainer>
          </View>
          
        </BlurView>
      </View>
    </Container>
  );
};

export default Car;
