import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useUserContext } from "../../context/UserContext";

const ConfirmSelectModal = ({ modalVisible, setModalVisible, carSelected }) => {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View className="bg-gray_modal_backdrop flex-1">
        <View className="bg-white m-auto w-72 h-96 justify-between p-2 rounded-xl">
          <View className="items-center space-y-3">
            <Text className="text-2xl font-black text-green_primary">
              Confirm Changes?
            </Text>
            <View className=" w-[256px] h-[160px] rounded-lg">
              <Image
                source={{
                  uri: carSelected.image,
                }}
                className="rounded-lg w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>
          <View className="flex-1 px-3 pt-2">
            <Text className="text-gray_inactive ">You Selected</Text>
            <Text className="text-2xl font-black">{carSelected.name}</Text>
            <Text className="text-yellow_primary">{carSelected.bodyType}</Text>
            <View className="flex-1 justify-end pb-2">
              <Text className="">
                <Text className="text-gray_inactive ">Variant:</Text>
                {""} {carSelected.variant}
              </Text>
              <Text className="text-green_primary">
                <Text className="text-gray_inactive">Price:</Text>{" "}
                {carSelected.price}
              </Text>
            </View>
          </View>

          <View className="flex-row space-x-4">
            <TouchableOpacity
              activeOpacity={0.7}
              className="py-2 rounded-md flex-1"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text className="text-center">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-green_primary py-2 rounded-md flex-1"
              onPress={() => {
                router.replace("/compare");
                setModalVisible(!modalVisible);
              }}
            >
              <Text className="text-center text-white">Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmSelectModal;
