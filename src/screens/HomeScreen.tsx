import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  Text,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import { Styles } from "../library/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

export function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={require("../../assets/Bg.png")}
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        <TouchableHighlight
          onPress={() =>
            ToastAndroid.show("Test Task for We Know IT", ToastAndroid.SHORT)
          }
        >
          <Image
            source={require("../../assets/Logo2.png")}
            style={{ maxHeight: 100 }}
          />
        </TouchableHighlight>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => navigation.navigate("Search By City")}
        >
          <Text style={Styles.buttonTextContainer}>Search By City</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => navigation.navigate("Search By Country")}
        >
          <Text style={Styles.buttonTextContainer}>Search By Country</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
