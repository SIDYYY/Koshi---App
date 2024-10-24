import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../../constants/icons";
import LogOutModal from "../Modals/LogOutModal";
import { useUserContext } from "../../context/UserContext";
const LogOutCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { color } = useUserContext();

  return (
    <>
      <LogOutModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setModalVisible(true);
        }}
        className="flex-row border-gray_border items-center space-x-4 pt-3"
      >
        <View className={`bg-green_logout_bg h-10 w-10 rounded-full`}>
          <Image
            source={icons.logout}
            tintColor={color.green_secondary}
            className="h-4 w-4 m-auto"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row items-center justify-between flex-1">
          <Text className="text-lg font-pregular">Log-Out</Text>
          <Image
            source={icons.arrow}
            className="h-4 w-4 scale-x-[-1]"
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LogOutCard;
