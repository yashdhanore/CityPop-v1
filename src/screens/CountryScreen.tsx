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
              style={{
                textAlign: "center",
                borderColor: "white",
                borderWidth: 1,
                maxHeight: 60,
                color: "white",
                fontSize: 18,
                marginBottom: 10,
                marginTop: 10,
                alignSelf: "stretch",
              }}
            />

            <TouchableOpacity
              onPress={() =>
                text
                  ? navigation.navigate("CountryResult", { countryinput: text })
                  : Alert.alert("No input", "Please enter a country name")
              }
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: "#f46530",
                  marginVertical: 10,
                  borderColor: "white",
                  borderWidth: 3,
                }}
              >
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

    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "#2a2e30",
    //   }}
    // >
    //   <View
    //     style={{
    //       position: "relative",
    //     }}
    //   >
    //     <Text
    //       style={{
    //         textTransform: "uppercase",
    //         fontSize: 40,
    //         color: "white",
    //         fontWeight: "bold",
    //         textAlign: "center",
    //       }}
    //     >
    //       SEARCH BY COUNTRY
    //     </Text>
    //   </View>
    //   <TextInput
    //     placeholder="Enter a country"
    //     placeholderTextColor={"white"}
    //     textAlign="center"
    //     autoCorrect={true}
    //     multiline={false}
    //     numberOfLines={2}
    //     maxLength={100}
    //     onChange={handleInput}
    //     style={[Styles.input, { borderColor: "white", minHeight: 60 }]}
    //   />
    //   <TouchableOpacity
    //     onPress={() =>
    //       text
    //         ? navigation.navigate("CountryResult", { countryinput: text })
    //         : alert("Please Input the text")
    //     }
    //   >
    //     <View style={Styles.buttonContainer}>
    //       <Text style={Styles.text}>Search</Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>
  );
}
