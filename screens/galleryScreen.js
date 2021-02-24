import React from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    StatusBar,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
  } from "react-native";

  const GalleryScreen = () => {
    return (
        <View style={styles.centered}>
            <Text>Ecranul galerie</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  })

  export default GalleryScreen