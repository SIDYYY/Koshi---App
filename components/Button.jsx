import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SkypeIndicator } from "react-native-indicators";
import { useUserContext } from "../context/UserContext";

const Button = ({
  label,
  otherStyles,
  withIcon,
  onPress,
  disabled = false,
  isLoading,
}) => {
  const { color } = useUserContext();
  return (
    <TouchableOpacity
      className={`${
        disabled ? "bg-gray_button_focused" : "bg-green_primary"
      } h-[57px] rounded-lg relative justify-center items-center flex-row space-x-4 ${otherStyles}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {withIcon ? (
        <Image source={withIcon} className="h-6 w-6" resizeMode="contain" />
      ) : (
        ""
      )}
      {isLoading ? (
        <SkypeIndicator color={color.green_primary} size={35} />
      ) : (
        <Text
          className={`text-base font-bold text-center justify-center items-center ${
            disabled || isLoading ? "text-gray_inactive" : "text-white"
          }`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
