import {
  Dimensions,
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

/**
 * @description The main function which loads the homescreen with background
 * @param navigation
 * @returns Homescreen with logo and 2 buttons which navigate to search by city and search by country
 */
export function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={require("../../assets/Bg.png")}
        style={{
          flex: 1,
          minHeight: Dimensions.get("window").height,
          justifyContent: "center",
        }}
      >
        <TouchableHighlight
          onPress={() =>
            ToastAndroid.show("Test Task for We Know IT", ToastAndroid.SHORT)
          }
        >
          <Image
            source={require("../../assets/CityPop.png")}
            style={{ flex: 0.5 }}
          />
        </TouchableHighlight>
        <View style={{ flex: 0.6, alignItems: "center" }}>
          <TouchableOpacity
            style={[Styles.buttonContainer]}
            onPress={() => navigation.navigate("Search By City")}
          >
            <Text style={[Styles.buttonTextContainer]}>Search By City</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.buttonContainer}
            onPress={() => navigation.navigate("Search By Country")}
          >
            <Text style={Styles.buttonTextContainer}>Search By Country</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
