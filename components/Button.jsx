import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Button = ({
  label,
  otherStyles,
  complete = true,
  icon,
  onPress,
  disabled = false,
  isLoading = false,
  iconTint,
}) => {
  return (
    <TouchableOpacity
      className={`${
        isLoading || !complete ? "bg-light_grey" : "bg-green"
      } h-[57px] rounded-lg relative justify-center items-center flex-row space-x-4 ${otherStyles}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {icon ? (
        <Image
          source={icon}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor={!complete ? "#9b9b9b" : iconTint}
        />
      ) : (
        ""
      )}
      <Text
        className={`text-base font-bold text-center ${
          !complete || isLoading ? "text-gray" : "text-white"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
