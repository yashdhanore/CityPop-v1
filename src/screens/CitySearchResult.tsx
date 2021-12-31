import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ProgressBarAndroidComponent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../library/Styles";
import React, { useEffect, useState } from "react";
import PopulationAPI from "../config/City";
import { Geoname, GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";

export function CitySearchResult({ navigation, route }) {
  const { cityinput } = route.params;
  const [population, setPopulation] = useState<GeoOutput>();

  useEffect(() => {
    getpop();
  }, []);

  // const getpop = async () => {
  //   const response = await fetch(
  //     "http://api.geonames.org/searchJSON?q=london&maxRows=10&username=weknowit"
  //   );
  //   const data = await response.json();
  //   setPopulation(data);
  //   out[0] = population
  //   console.log(out);
  //   //console.log(population);
  // };

  function getpop() {
    PopulationAPI.get("searchJSON?q=sweden&maxRows=10&username=weknowit")
      .then(function (response) {
        setPopulation(response.data);
        console.log(population.geonames.map((item) => item.name)[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!population) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>
        {
          population.geonames.map((item) => (
            <TouchableOpacity style={{}}>
              <Text style={Styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))[0]
        }
      </Text>
      {/* <FlatList
        data={population.geonames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList> */}
    </View>
  );
}
