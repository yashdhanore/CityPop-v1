import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { CitySearchResult } from "./CitySearchResult";

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

export function CityScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBox />
      <Icon.Button
        name="search"
        backgroundColor="#f46530"
        onPress={() => navigation.navigate("CityResult")}
      >
        Search
      </Icon.Button>
    </View>
  );
}

export default SearchBox;
