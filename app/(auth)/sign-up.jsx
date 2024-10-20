import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import { router } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { createUser } from "../../lib/supabase";
import { useUserContext } from "../../context/UserContext";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/validation";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingModal from "@/components/Modals/LoadingModal";

const SignUp = () => {
  const [databaseError, setDatabaseError] = useState("");
  const { setAuthId, color } = useUserContext();
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch email and password
  const name = watch("fullName");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    setDatabaseError("");
  }, [name, email, password, confirmPassword]);

  //this is the overall logic of the sign in user
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { user, error } = await createUser(
        data.email,
        data.password,
        data.fullName
      );

      if (user && user.user) {
        // Set global state and redirect if the user is created successfully
        const authUserId = user.user.id;
        setAuthId(authUserId);
        router.replace("/home");
      } else if (error) {
        // Set databaseError if there’s an error from the backend
        setDatabaseError(error.message);
      }
    } catch (error) {
      console.log("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container scroll={true} bg={color.green_primary} pb={false} ph={false}>
      <Text className="mt-2 mb-14 text-[40px] text-white font-black px-4">
        Sign Up
      </Text>
      <LoadingModal
        loadingModal={isLoading}
        label="Creating your Account...."
      />

      <View className="pb-4 px-4 pt-8 space-y-2 rounded-tl-3xl rounded-tr-3xl bg-white">
        <Text className="text-2xl font-black">Create an Account</Text>
        <Text className="text-base text-green_primary">
          Please provide your details
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="bg-white px-4  flex-1 "
      >
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              placeholder="Full Name"
              value={value}
              errorMessage={errors.fullName ? errors.fullName.message : ""} // Use formState's errors
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              label="email"
              placeholder="Email"
              value={value}
              errorMessage={errors.email ? errors.email.message : ""} // Use formState's errors
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              label="password"
              placeholder="Password"
              value={value}
              errorMessage={errors.password ? errors.password.message : ""} // Use formState's errors
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword" // Matches Yup schema key
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              label="password"
              placeholder="Confirm Password"
              value={value}
              errorMessage={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              } // Use formState's errors
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <ErrorMessage value={databaseError} />

        <View className="bg-white flex-1">
          <View className="flex-row mb-8 mt-3 ml-1">
            <BouncyCheckbox
              isChecked={isCheck}
              onPress={() => setIsCheck(!isCheck)}
              innerIconStyle={{
                borderRadius: 0,
              }}
              iconStyle={{
                borderRadius: 0,
              }}
              size={16}
              className=""
              fillColor={isCheck ? color.green_primary : color.gray_inactive}
            />
            <TouchableOpacity
              className="text-green_primary"
              activeOpacity={0.7}
              onPress={() => setIsCheck(!isCheck)}
            >
              <Text
                className={`text-base ${isCheck ? "text-green_primary" : "text-gray_inactive"}`}
              >
                Agree to terms & conditions
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            label="Create Account"
            otherStyles="mb-10"
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting || !!databaseError || !isCheck}
            isLoading={isSubmitting}
          />
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUp;
