import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
const axios = require("axios").default;

export function CitySearchResult({ navigation, route }) {
  const { phoneNumber } = route.params;
  return (
    <View>
      <Text>{phoneNumber}</Text>
    </View>
  );
}
