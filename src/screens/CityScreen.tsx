import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { CitySearchResult } from "./CitySearchResult";
import axios from "axios";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export function CityScreen({ navigation }) {
  const [text, setText] = useState("");
  const handleInput = (event) => {
    let temp = event.nativeEvent.text;
    setText(temp);
  };
  return (
    <ImageBackground
      source={require("../../assets/Bg.png")}
      style={{ height: Dimensions.get("window").height }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ padding: 15, flex: 1, justifyContent: "space-evenly" }}
          >
            <Text
              style={{
                fontSize: 36,
                marginBottom: 48,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              SEARCH BY CITY
            </Text>
            <View
              style={{
                flex: 0.4,
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Enter a city"
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
                    ? navigation.navigate("CityResult", { cityinput: text })
                    : Alert.alert("No input", "Please enter a city name")
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
    </ImageBackground>
  );
}
