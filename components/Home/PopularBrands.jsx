import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";

export default function PopularBrands() {
  const [activeFrame, setActiveFrame] = useState("Car Makes");
  const navigation = useNavigation(); // Use the hook to get navigation

  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

  // const handleChangeModel = (Maker) => {
  //   navigation.navigate("Model", { brand: Maker.name });
  // };

  return (
    <View className=" rounded-lg py-4">
      <Title title="Popular Brands" />
      {/* <FlatList
        data={["Car Makes", "Body Type"]}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-3">
            <CarFilterPill
              item={item}
              handleFrameSelect={handleFrameSelect}
              activeFrame={activeFrame}
            />
          </View>
        )}
        keyExtractor={(item) => item}
      /> */}
      <FlatList
        data={logos.slice(0, 10)}
        horizontal={true}
        renderItem={({ item }) => (
          <LogoCard logo={item} otherStyles="" />
        )}
        keyExtractor={(item) => item.name}
        className="-mx-4"
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />

      {/* : (
      <FlatList
        data={carType.slice(0, 10)}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-6 py-2 mx-3">
            <BodyTypeCard type={item} />
          </View>
        )}
        keyExtractor={(item) => item.type}
      />
      ) */}
    </View>
  );
}
