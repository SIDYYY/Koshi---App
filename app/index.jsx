import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import Container from "@/components/Container";
import icons from "@/constants/icons";
import { useUserContext } from "../context/UserContext";
import { supabase } from "@/lib/supabase";
import LoadingSpinner from "@/components/LoadingSpinner";
import CustomModal from "@/components/Modals/ConfirmationModal";

const index = () => {
  const { isLoading, setAuthId, user } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        return; // Handle error appropriately (e.g., show a message)
      }

      if (data.session != null) {
        const userId = data.session.user.id;
        setAuthId(userId); // Set authId here

        // Only show modal and redirect if counter is 0 (first time)
        if (user != null && !isLoading && counter === 0) {
          setModalVisible(true);
          const timer = setTimeout(() => {
            setModalVisible(false);
            router.replace("/home");
          }, 3000);

          setCounter(1); // Increment the counter to ensure this only happens once
          return () => clearTimeout(timer); // Clean up timer
        }
      } else {
        if (data.session === null && !isLoading) {
          router.replace("/sign-in");
        }
      }
    };

    checkUserSession();
  }, [user, isLoading]);


  return (
    <Container bg="#5CB88F">
      <LoadingSpinner
        isLoading={isLoading}
        customText="Checking if you have logged in before"
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        customRoute={"/home"}
        title="Log-in Successfully"
        status={true}
      />
      <View className=" h-full justify-center items-center flex-row gap-2">
        <Image
          source={icons.logo}
          className="h-24 w-24"
          resizeMode="contain"
          tintColor="#ffffff"
        />
        <View className="items-center">
          <Text className="font-black text-5xl text-white py-1 tracking-[7px]">
            KOSHI
          </Text>
          <Text className="text-white text-[13px] -mt-3 ">
            Helping you pick the right ride
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default index;
