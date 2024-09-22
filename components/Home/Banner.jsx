import { Text, View, Animated, Image } from "react-native";
import images from "../../constants/images";

const Banner = () => {
  return (
    <View className=" justify-center mt-6 px-4">
      <Image
        source={images.header}
        className="rounded-2xl w-full h-[135px] relative"
        resizeMode="cover"
      />
      <View className="absolute left-7">
        <Animated.Text className="text-[#9b9b9b]">Welcome, User</Animated.Text>
        <Text className="text-white text-2xl max-w-[180px]">
          Explore the app, and decide
        </Text>
      </View>
    </View>
  );
};

export default Banner;
