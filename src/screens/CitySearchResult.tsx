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
import { axios } from "axios/dist/axios";

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

  //"searchJSON?q=stockholm&maxRows=10&username=weknowit"

  function getpop() {
    PopulationAPI.get("http://api.geonames.org/searchJSON", {
      params: {
        q: cityinput,
        maxRows: 10,
        username: "weknowit",
      },
    })
      .then(function (response) {
        setPopulation(response.data);
        //console.log(cityinput);
        //console.log(population);
        //console.log(population.geonames.map((item) => item.name)[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!population) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        {
          population.geonames.map((item) => (
            <View style={{}}>
              <View style={{ alignSelf: "stretch" }}>
                <Text style={{ textTransform: "uppercase" }}>{item.name}</Text>
              </View>
              <View style={{ alignSelf: "stretch" }}>
                <Text>POPULATION</Text>
                <Text>{item.population}</Text>
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
      </Text>
      {/* <FlatList
        data={population.geonames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList> */}
    </View>
  );
}
