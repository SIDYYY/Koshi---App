import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
    <View className="flex-row px-4 mt-6">
      <Image style={styles.pinLocation} source={icons.location} />
      <View>
        <View style={styles.locationInfoHead}>
          <Text style={styles.locationInfoHeadText}>Your Current Location</Text>
        </View>
        <View style={styles.locationInfo}>
          {address ? (
            <Text style={styles.locationInfoText}>{address}</Text>
          ) : locationError ? (
            <Text style={styles.locationInfoText}>{locationError}</Text>
          ) : (
            <Text style={styles.locationInfoText}>Fetching location...</Text>
          )}
        </View>
      </View>
    </View>
  );
};
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
export default LocationHeader;
