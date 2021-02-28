import React, { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as constants from "../constants/constants";
import MasonryList from "react-native-masonry-list";
import data from "../constants/dummy-data";

const width = Dimensions.get("window").width;

const GalleryScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Fetching more data...");

    const response = await fetch(constants.default.url);

    if (!response.ok) {
      throw new Error("Error while fetching data.");
    }

    const resData = await response.json();
    setItems(items.concat(resData));
  };

  return (
    <MasonryList
      images={items}
      imageContainerStyle={{ borderRadius: 20 }}
      containerWidth={width}
      backgroundColor={"#37474f"}
      spacing={3}
      // Version *2.14.0 update
      onEndReached={() => {
        //fetchData();
      }}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GalleryScreen;
