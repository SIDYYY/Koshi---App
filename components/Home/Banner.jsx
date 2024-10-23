import { Text, View, Animated, Image } from "react-native";
import icons from "../../constants/icons";
import ContentContainer from "../ContentContainer";
import { useUserContext } from "../../context/UserContext";

const Banner = () => {
  const { color, user } = useUserContext();

  return (
    <>
      <ContentContainer otherStyles="mb-4">
        <View className="flex-row items-center space-x-4">
          <View className="w-12 h-12 bg-gray_border rounded-full">
            <Image
              source={icons.user}
              className="h-6 w-6 m-auto"
              resizeMode="contain"
              tintColor={color.gray_inactive}
            />
          </View>
          <View className="flex-row justify-between flex-1">
            <Text className="text-lg font-bold">{user ? user.name : "Guest"}</Text>
            <Image
              source={icons.search}
              className="h-6 w-6"
              tintColor={color.black}
              resizeMode="contain"
            />
          </View>
        </View>
      </ContentContainer>
    </>
  );
};

export default Banner;
