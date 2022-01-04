import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ProgressBarAndroidComponent,
  Alert,
  ImageBackground,
} from "react-native";
import { Styles } from "../library/Styles";
import React, { useEffect, useState } from "react";
import { Geoname, GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Dimensions } from "react-native";

/**
 *
 * @param navigation
 * @param route
 * @returns A View that displays the City and its population
 */
export function CitySearchResult({ navigation, route }) {
  const { cityinput } = route.params;
  const [population, setPopulation] = useState<GeoOutput>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getpop();
  }, []);

  const getpop = async () => {
    try {
      setLoading(true);
      const data = await axios
        .get("http://api.geonames.org/searchJSON", {
          params: {
            q: cityinput,
            maxRows: 10,
            username: "weknowit",
          },
        })
        .then(function (response) {
          setPopulation(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (!population) {
    return null;
  }

  if (population.geonames.length <= 0) {
    Alert.alert("Invalid city name!", "Please input a valid city name", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  }
  return (
    <ImageBackground
      source={require("../../assets/Bg.png")}
      style={{
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        population.geonames.map((item) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            <Text
              style={{
                marginBottom: 50,
                flex: 0.2,
                textTransform: "uppercase",
                fontSize: 40,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <View style={[Styles.populationBox]}>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#fff",
                  fontSize: 20,
                  top: -12,
                  fontWeight: "normal",
                }}
              >
                POPULATION
              </Text>
              {!loading ? (
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontSize: 40,
                    fontWeight: "normal",
                  }}
                >
                  {item.population}
                </Text>
              ) : (
                <ActivityIndicator
                  color={"white"}
                  size={60}
                ></ActivityIndicator>
              )}
            </View>
            <View style={{ flex: 0.2 }}></View>
          </View>
        ))[0]
      }
    </ImageBackground>
  );
}
