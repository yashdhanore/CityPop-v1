import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBox = ({ navigation }: { navigation: any }) => {
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
        <Icon.Button
          name="search"
          backgroundColor="#f46530"
          onPress={() => navigation.navigate()}
        >
          Search
        </Icon.Button>
      </View>
    </SafeAreaView>
  );
};

export function CityScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBox navigation={undefined} />
    </View>
  );
}

export default SearchBox;
