import { Text, View, Animated, Image } from "react-native";
import icons from "../../constants/icons";

const Banner = () => {
  return (
    <View className="mb-8">
      <View className="flex-row items-center space-x-4">
        <View className="w-14 h-14 bg-[#9b9b9b] rounded-full" />
        <View className="flex-row justify-between flex-1">
          <Text className="text-lg font-bold">Samm Caagbay</Text>
          <Image
            source={icons.settings}
            className="h-8 w-8"
            tintColor="#9b9b9b"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Banner;
