import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React, { Component, useEffect, useState } from "react";
import { GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";

export function CountrySearchResult({ navigation, route }) {
  const { countryinput } = route.params;
  const [loading, setLoading] = useState(false);
  const [population, setPopulation] = useState<GeoOutput>();

  useEffect(() => {
    getpop();
  }, []);

  const getpop = async () => {
    try {
      setLoading(true);
      const data = await axios
        .get("http://api.geonames.org/searchJSON", {
          params: {
            q: countryinput,
            maxRows: 10,
            username: "weknowit",
            orderby: "population",
            cities: "cities15000",
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
    Alert.alert("Invalid country name!", "Please input a valid country name", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#2a2e30",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "stretch",
        }}
      >
        <View
          style={{
            flex: 0.3,
            alignSelf: "stretch",
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
            {countryinput}
          </Text>
        </View>
        <View
          style={{
            marginTop: Dimensions.get("window").height / 9,
            alignSelf: "stretch",
          }}
        >
          {!loading ? (
            <View>
              <FlatList
                scrollEnabled={false}
                data={population.geonames.slice(0, 5)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={Styles.countryButtons}
                    onPress={() =>
                      navigation.navigate("CityResult", {
                        cityinput: item.name,
                      })
                    }
                  >
                    <Text style={{ fontSize: 20, color: "black" }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              ></FlatList>
            </View>
          ) : (
            <ActivityIndicator color={"white"} size={60}></ActivityIndicator>
          )}
        </View>
      </View>
    </View>
  );
}
