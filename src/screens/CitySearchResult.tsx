import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ProgressBarAndroidComponent,
} from "react-native";
import { Styles } from "../library/Styles";
import React, { useEffect, useState } from "react";
import { Geoname, GeoOutput } from "../config/Interfaces";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export function CitySearchResult({ navigation, route }) {
  const { cityinput } = route.params;
  const [population, setPopulation] = useState<GeoOutput>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getpop();
  }, []);

  const getpop = async () => {
    setLoading(true);
    try {
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
  // function getpop() {
  //   axios
  //     .get("http://api.geonames.org/searchJSON", {
  //       params: {
  //         q: cityinput,
  //         maxRows: 10,
  //         username: "weknowit",
  //       },
  //     })
  //     .then(function (response) {
  //       setPopulation(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  if (!population) {
    return null;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"red"} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
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
              <View style={Styles.result}>
                <Text style={Styles.buttonTextContainer}>{item.name}</Text>
              </View>
              <View style={Styles.result}>
                <Text style={Styles.buttonTextContainer}>POPULATION</Text>
                <Text style={Styles.buttonTextContainer}>
                  {item.population}
                </Text>
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
    </View>
  );
}
