import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import * as Location from "expo-location";
import icons from "../../constants/icons";

const LocationHeader = () => {
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
    <View className="flex-row px-4 space-x-4">
      <Image className="w-6 h-9" source={icons.location} resizeMode="contain" />
      <View>
        <Text className="text-xs text-gray_inactive">
          Your Current Location
        </Text>
        {address ? (
          <Text>{address}</Text>
        ) : locationError ? (
          <Text>{locationError}</Text>
        ) : (
          <Text>Fetching location...</Text>
        )}
      </View>
    </View>
  );
};

export default LocationHeader;
