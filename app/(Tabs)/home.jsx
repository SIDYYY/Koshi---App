import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Animated,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import * as Location from "expo-location";
import icons from "../../constants/icons";
import images from "../../constants/images";
import PopularCar from "../../components/popularCar";
import PopularMaker from "../../components/popularMaker";
import Why from "../../components/WhyKOSHI";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [locationError, setLocationError] = useState(null);

  const getSearch = (value) => {
    setSearch(value);
  };

  const fetchLocation = async () => {
    try {
      // Request permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationError("Location permission not granted");
        return;
      }

      // Get location
      let { coords } = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(coords);

      // Reverse geocoding
      let [locationData] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      // Format address
      if (locationData) {
        const { street, city, region, country } = locationData;
        setAddress(`${street}, ${city}, ${region}, ${country}`);
      } else {
        setAddress("Address not available");
      }
    } catch (error) {
      setLocationError(error.message);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <SafeAreaView className="bg-white ">
      <ScrollView className="py-8">
        <View className="flex-row px-4">
          <Image style={styles.pinLocation} source={icons.location} />
          <View>
            <View style={styles.locationInfoHead}>
              <Text style={styles.locationInfoHeadText}>
                Your Current Location
              </Text>
            </View>
            <View style={styles.locationInfo}>
              {address ? (
                <Text style={styles.locationInfoText}>{address}</Text>
              ) : locationError ? (
                <Text style={styles.locationInfoText}>{locationError}</Text>
              ) : (
                <Text style={styles.locationInfoText}>
                  Fetching location...
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* Banner Section */}
        <View className=" justify-center mt-6 px-4">
          <Image
            source={images.header}
            className="rounded-2xl w-full h-[135px] relative"
            resizeMode="cover"
          />
          <View className="absolute left-7">
            <Animated.Text className="text-[#9b9b9b]">
              Welcome, User
            </Animated.Text>
            <Text className="text-white text-2xl max-w-[180px]">
              Explore the app, and decide
            </Text>
          </View>
        </View>

        <View className="border mx-4 border-[#9b9b9b] mt-8 h-14 rounded-full justify-center px-4 flex-row">
          <TextInput
            className="text-sm flex-1"
            placeholder="Search..."
            placeholderTextColor="#9b9b9b"
          />
          <Image
            source={icons.search}
            className="h-6 w-6 self-center"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row mt-11 justify-between px-4 ">
          <Text className="text-2xl font-black ">Popular New Cars</Text>
          <TouchableOpacity className="flex-row items-center justify-center space-x-2">
            <Text className="text-sm text-[#ECAE36]">See More</Text>
            <Image
              source={icons.arrow}
              className="w-2 h-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <PopularCar />
        <PopularMaker />
        <Why />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff ",
  },
  container: {
    padding: 15,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  pinLocation: {
    width: 25,
    height: 35,
    marginRight: 10,
  },
  locationInfoHead: {
    marginBottom: 5,
    textAlign: "left",
  },
  locationInfoHeadText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  locationInfo: {
    marginBottom: 10,
  },
  locationInfoText: {
    fontSize: 14,
    color: "#666",
  },
  banner: {
    height: 135,
    width: "100%",
  },
  imageBackground: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "start",
  },
  centeredContent: {
    alignItems: "start",
    padding: 35,
  },
  welcome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9B9B9B",
    width: 110,
  },
  sectionTitleExplore: {
    fontSize: 23,
    color: "#fff",
    marginTop: 10,
    width: 170,
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    padding: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#000",
    borderRadius: 30,
    paddingRight: 10,
    flexDirection: "row-reverse",
  },
  searchBarInput: {
    backgroundColor: "#fff",
  },
  iconContainer: {
    paddingRight: 10,
    justifyContent: "flex-end",
  },
  clearContainer: {
    paddingLeft: 10,
  },
});
