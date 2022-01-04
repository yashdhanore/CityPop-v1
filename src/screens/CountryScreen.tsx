import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import { Styles } from "../library/Styles";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export function CountryScreen({ navigation }) {
  const [text, setText] = useState("");
  const handleInput = (event) => {
    let temp = event.nativeEvent.text;
    setText(temp);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#2a2e30" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 15, flex: 1, justifyContent: "space-evenly" }}>
          <Text
            style={{
              fontSize: 36,
              marginBottom: 48,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            SEARCH BY COUNTRY
          </Text>
          <View
            style={{
              flex: 0.4,
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Enter a country"
              placeholderTextColor={"white"}
              textAlign="center"
              autoCorrect={true}
              multiline={false}
              numberOfLines={2}
              maxLength={100}
              onChange={handleInput}
              style={Styles.inputText}
            />

            <TouchableOpacity
              onPress={() =>
                text
                  ? navigation.navigate("CountryResult", { countryinput: text })
                  : Alert.alert("No input", "Please enter a country name")
              }
            >
              <View style={Styles.searchCircle}>
                <Icon
                  name="search"
                  style={{ fontSize: 35, color: "white" }}
                ></Icon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
