import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2a2e30",
      }}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 40,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          SEARCH BY COUNTRY
        </Text>
      </View>
      <TextInput
        placeholder="Enter a country"
        placeholderTextColor={"white"}
        textAlign="center"
        autoCorrect={true}
        multiline={false}
        numberOfLines={2}
        maxLength={100}
        onChange={handleInput}
        style={[Styles.input, { borderColor: "white", minHeight: 60 }]}
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
