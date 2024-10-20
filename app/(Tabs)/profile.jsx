import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import icons from "../../constants/icons";
import SettingsCard from "../../components/Profile/SettingsCard";
import DarkModeCard from "../../components/Profile/DarkModeCard";
import LogOutCard from "../../components/Profile/LogOutCard";
import FormModal from "../../components/Modals/FormModal";

const Profile = () => {
  const { user, color } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container scroll={true}>
      <FormModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <BackButtonHeader title="My Profile" />
      <View className="w-full bg-white h-[200px] rounded-lg mt-4 justify-center items-center relative">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
          className="top-4 right-4 absolute flex-row gap-2 items-center"
        >
          <Image
            className=" h-4 w-4"
            tintColor={color.gray_inactive}
            source={icons.edit}
          />
          <Text className="text-gray_inactive">Edit</Text>
        </TouchableOpacity>
        <View className="h-20 w-20 bg-gray_border mb-2 rounded-full">
          <Image
            source={icons.user}
            className="h-12 w-12 m-auto"
            tintColor={color.gray_inactive}
            resizeMode="contain"
          />
        </View>

        <Text className="text-lg mb-1">{user.name}</Text>
        <Text className="text-gray_inactive text-xs">{user.email}</Text>
        <Text className="text-gray_inactive text-xs">
          {user.phone_number ? user.phone_number : "No phone number added yet"}
        </Text>
      </View>

      <View className="w-full bg-white mt-4 rounded-lg p-4">
        <DarkModeCard />
        <SettingsCard
          label="Personal Info"
          icon={icons.user}
          iconBg={color.blue_icon_bg}
          iconTint={color.blue_primary}
        />
        <SettingsCard
          label="Become A Seller"
          icon={icons.seller}
          iconBg={color.orange_icon_bg}
          iconTint={color.orange_primary}
        />
        <SettingsCard
          label="Change Password"
          icon={icons.changepwd}
          iconBg={color.blue_icon_bg}
          iconTint={color.blue_primary}
        />
      </View>
      <View className="w-full bg-white mt-4 rounded-lg p-4">
        <SettingsCard
          label="Delete Account"
          icon={icons.deleteIcon}
          iconBg={color.red_icon_bg}
          iconTint={color.red_primary}
          borderTop={false}
        />
        <LogOutCard />
      </View>
    </Container>
  );
};

export default Profile;
