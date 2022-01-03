import {
  Animated,
  Dimensions,
  Easing,
  Image,
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
      <TouchableHighlight
        onPress={() =>
          ToastAndroid.show("Test Task for We Know IT", ToastAndroid.SHORT)
        }
      >
        <Image
          source={require("../../assets/Logo1.png")}
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
      <Image
        source={require("C:UsersYashDownloadsimage2vector (1).svg")}
      ></Image>
    </SafeAreaView>
  );
}
