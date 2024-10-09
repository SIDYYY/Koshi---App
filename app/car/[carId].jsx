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
import { useCarContext } from "../../context/CarContext";
const Car = () => {
  const { carId } = useLocalSearchParams();
  const { isLoading, setIsLoading, setId, variants, car } = useCarContext();
  const [showCardByTier, setShowCardByTier] = useState("1");

  useEffect(() => {
    setId(carId);
    if (!isLoading) {
      setIsLoading(true);
    }
  }, []);

  if (isLoading) {
    // Render the isLoading state
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
            source={{ uri: car.image }}
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
          <BackButtonHeader title="Car Details" type="car" />
          <View className="h-[270px]">
            <Image
              source={{ uri: car.image }}
              className="w-full h-[200px] m-auto rounded-xl"
              resizeMode="cover"
            />
          </View>
          <View className="bg-main_bg_grey rounded-t-2xl flex-1 -mx-[14px] px-[14px]">
            <Text className="font-black text-3xl mt-8">{car.name}</Text>
            <Title title="Car Overview" more={false} />
            <ContentContainer otherStyles="space-y-3">
              <View className="">
                <Text className="">Price Range:</Text>
                <Pill label={car.price} textOnly={false} />
              </View>
              <View className="">
                <Text className="">Body Type:</Text>
                <Pill label={car.bodyType} textOnly={false} />
              </View>
              <View className="">
                <Text className="">Transmission:</Text>
                <View className="flex-row ml-4 mt-2">
                  <Pill label="Gasoline" otherStyles="mr-4" />
                  <Pill label="Diesel" />
                </View>
              </View>
            </ContentContainer>
            <Title title="Variants Available" more={false} otherStyles="" />
            <>
              <FlatList
                data={variants}
                renderItem={({ item }) => (
                  <Variants
                    variant={item}
                    isShown={showCardByTier === item.tier}
                    onPress={() =>
                      setShowCardByTier(
                        showCardByTier === item.tier ? null : item.tier
                      )
                    }
                  />
                )}
                scrollEnabled={false}
                keyExtractor={(item) => item.tier}
              />
            </>
          </View>
        </BlurView>
      </View>
    </Container>
  );
};

export default Car;
