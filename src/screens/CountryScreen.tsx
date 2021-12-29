import { Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBox = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignSelf: "stretch",
        position: "relative",
        top: 10,
      }}
    >
      <View>
        <Text style={Styles.text}>Search By Country</Text>
        <TextInput
          placeholder="Enter a country"
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

export default SearchBox;

export function CountryScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBox />
      <Icon.Button
        style={{}}
        name="search"
        backgroundColor="#f46530"
        onPress={() => navigation.navigate("CountryResult")}
      >
        Search
      </Icon.Button>
    </View>
  );
}
