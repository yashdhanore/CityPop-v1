import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ProgressBarAndroidComponent,
  Alert,
} from "react-native";
import { Styles } from "../library/Styles";
import React, { useEffect, useState } from "react";
import { Geoname, GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Dimensions } from "react-native";

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
    navigation.goBack();
    Alert.alert("Invalid country name", "Please input a valid city name");
  }

  return (
    <View
      style={{
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
              backgroundColor: "#2a2e30",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            <View style={Styles.cityName}>
              <Text
                style={{
                  textTransform: "uppercase",
                  position: "absolute",
                  fontSize: 40,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
            </View>

            <View style={Styles.populationBox}>
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
          </View>
          // <View
          //   style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
          // >
          //   <Text style={Styles.text}>{item.name}</Text>
          //   <View
          //     style={{
          //       width: "100%",
          //       borderRadius: 12,
          //       borderWidth: 2,
          //     }}
          //   >
          //     <Text style={Styles.text}>Population</Text>
          //     <Text style={Styles.text}>{item.population}</Text>
          //   </View>
          // </View>
        ))[0]
      }
    </View>
  );
}
