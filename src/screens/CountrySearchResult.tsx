import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";

export function CountrySearchResult({ navigation, route }) {
  const { country } = route.params;
  return (
    <View>
      <Text>{country}</Text>
    </View>
  );
}
