import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBox = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignSelf: "stretch" }}>
      <View style={Styles.formatview}>
        <Text style={Styles.text}>Search By Country</Text>
        <TextInput
          placeholder="Enter a city"
          autoCorrect={true}
          multiline={false}
          numberOfLines={2}
          maxLength={100}
          style={Styles.input}
        />
        <Icon.Button name="search" backgroundColor="#f46530">
          Search
        </Icon.Button>
      </View>
    </SafeAreaView>
  );
};

export default SearchBox;

export function CountryScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBox />
    </View>
  );
}
