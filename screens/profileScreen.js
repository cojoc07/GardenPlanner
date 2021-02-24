import React from "react";
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

const ProfileScreen = () => {
  return (
    <View style={styles.centered}>
      <Text>Ecranul profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
