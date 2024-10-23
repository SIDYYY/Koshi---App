import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import { BlurView } from "expo-blur";

const CarHeader = ({children ,carImage , backButtonTitle }) => {
  return (
    <Container ph={false} pt={false}>
      <View>
        <View className="w-full h-[300px] rounded-b absolute -z-10">
          <Image
            source={{ uri: carImage }}
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
          <BackButtonHeader title={backButtonTitle} type="car" />
          <View className="h-[270px]">
            <Image
              source={{ uri: carImage }}
              className="w-full h-[200px] m-auto rounded-xl"
              resizeMode="cover"
            />
          </View>

          <View className="bg-white_tertiary rounded-t-2xl flex-1 -mx-[14px] px-[14px]">
            {children}
          </View>
        </BlurView>
      </View>
    </Container>
  );
};

export default CarHeader;
