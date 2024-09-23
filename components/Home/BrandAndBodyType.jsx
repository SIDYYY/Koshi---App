import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import CarFilterPill from "../CarFilterPill";
import LogoCard from "../LogoCard";
import BodyTypeCard from "../BodyTypeCard";
import logos from "../../lib/logos";
import carType from "../../lib/car-type";
import ProceedArrow from "../ProceedArrow";

export default function Popular({ route }) {
  const [activeFrame, setActiveFrame] = useState("Car Makes");
  const navigation = useNavigation(); // Use the hook to get navigation

  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

  // const handleChangeModel = (Maker) => {
  //   navigation.navigate("Model", { brand: Maker.name });
  // };

  return (
    <>
      <Title title="Popular Car Makes & Body Type" titleStyle="max-w-[230px]" />
      <FlatList
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
      />

      {activeFrame === "Car Makes" ? (
        <FlatList
          data={logos.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => (
            <View className="mt-6 py-2 mx-3">
              <LogoCard logo={item} />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
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
      )}
      <ProceedArrow label={`View More ${activeFrame}`} />
    </>
  );
}
