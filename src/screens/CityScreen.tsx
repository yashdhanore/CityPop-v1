import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
import {} from "react-native-vector-icons";

const SearchBox = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }}>
      <View style={Styles.formatview}>
        <Text style={Styles.text}>Search By City</Text>
        <TextInput
          placeholder="Enter a city"
          autoCorrect={true}
          multiline={false}
          numberOfLines={2}
          maxLength={100}
          style={Styles.input}
        />
      </View>
    </SafeAreaView>
  );
};

export function CityScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBox />
    </View>
  );
}

export default SearchBox;
