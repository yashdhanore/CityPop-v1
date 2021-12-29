import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CityScreen } from "../screens/CityScreen";
import { CountryScreen } from "../screens/CountryScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { CitySearchResult } from "../screens/CitySearchResult";

interface RoutesProps {}

const Stack = createStackNavigator();
const StackNavigator = (
  <Stack.Navigator>
    <Stack.Screen name="CityPop" component={HomeScreen} />
    <Stack.Screen name="Search By City" component={CityScreen} />
    <Stack.Screen name="Search By Country" component={CountryScreen} />
    <Stack.Screen name="CityResult" component={CitySearchResult} />
  </Stack.Navigator>
);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
