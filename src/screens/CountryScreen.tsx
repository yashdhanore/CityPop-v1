import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Styles } from "../library/Styles";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export function CountryScreen({ navigation }) {
  const [text, setText] = useState("");
  const handleInput = (event) => {
    let temp = event.nativeEvent.text;
    setText(temp);
    console.log(temp);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Enter a city"
        autoCorrect={true}
        multiline={false}
        numberOfLines={2}
        maxLength={100}
        onChange={handleInput}
        style={Styles.input}
      />
      <TouchableOpacity
        onPress={() =>
          text
            ? navigation.navigate("CountryResult", { countryinput: text })
            : alert("Please Input the text")
        }
      >
        <View style={Styles.buttonContainer}>
          <Text style={Styles.text}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
