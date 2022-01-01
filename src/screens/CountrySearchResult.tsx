import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React, { useEffect, useState } from "react";
import PopulationAPI from "../config/City";
import { GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";

export function CountrySearchResult({ navigation, route }) {
  const { countryinput } = route.params;

  const [population, setPopulation] = useState<GeoOutput>();

  useEffect(() => {
    getpop();
  }, []);

  function getpop() {
    PopulationAPI.get("http://api.geonames.org/searchJSON", {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!population) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={population.geonames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CityResult", { cityinput: item.name })
              }
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
