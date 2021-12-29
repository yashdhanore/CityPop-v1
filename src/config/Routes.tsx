import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CityScreen } from "../screens/CityScreen";
import { CountryScreen } from "../screens/CountryScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { CitySearchResult } from "../screens/CitySearchResult";
import { CountrySearchResult } from "../screens/CountrySearchResult";

interface RoutesProps {}

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CityPop"
          component={HomeScreen}
          options={{ title: "CityPop" }}
        />
        <Stack.Screen
          name="Search By City"
          component={CityScreen}
          options={{ title: "Search By City" }}
        />
        <Stack.Screen
          name="Search By Country"
          component={CountryScreen}
          options={{ title: "Search By Country" }}
        />
        <Stack.Screen
          name="CityResult"
          component={CitySearchResult}
          options={{ title: "Results" }}
        />
        <Stack.Screen
          name="CountryResult"
          component={CountrySearchResult}
          options={{ title: "Results" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
