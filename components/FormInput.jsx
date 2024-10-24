import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useUserContext } from "../context/UserContext";

const FormInput = ({
  label = "default",
  placeholder,
  value = "",
  errorMessage,
  onBlur,
  onChangeText,
  otherStyles,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { color } = useUserContext();

  return (
    <View className={`${otherStyles} ${value ? "mt-12" : "mt-6"}`}>
      <View className="relative">
        {value && (
          <View className=" z-10 absolute -top-6 left-2 flex-row justify-between right-2">
            <Text className="text-gray_inactive font-pregular">
              {placeholder}
            </Text>
            <Image
              source={errorMessage ? icons.x : icons.check}
              tintColor={errorMessage ? color.red_primary : color.green_primary}
              className={errorMessage ? "h-5 w-5" : "h-4 w-4"}
            />
          </View>
        )}
        <TextInput
          onBlur={onBlur}
          cursorColor={color.gray_inactive}
          className={`text-base px-4 py-3 rounded-lg font-pregular border ${
            errorMessage
              ? "border border-red-500 bg-red_error_bg"
              : !value
              ? "border-gray_border"
              : "border-green_primary bg-form_correct_bg"
          }`}
          placeholderTextColor={color.gray_inactive}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText(text)}
          autoCapitalize={
            label === "email" || label === "password" ? "none" : "sentences"
          }
          autoCorrect={false}
          inputMode={
            label === "email"
              ? "email-address"
              : label === "phone_number"
              ? "decimal"
              : "default"
          }
          secureTextEntry={label === "password" ? hidePassword : false}
          value={value}
        />
        {label === "password" && (
          <TouchableOpacity
            className="absolute right-0 px-4 items-center h-full top-0 justify-center"
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Image
              className="h-7 w-7"
              resizeMode="contain"
              source={hidePassword ? icons.eyeHide : icons.eye}
              tintColor={color.gray_border}
            />
          </TouchableOpacity>
        )}
      </View>

      {errorMessage && <ErrorMessage value={errorMessage} />}
    </View>
  );
};

export default FormInput;
