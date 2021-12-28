import { StatusBar } from 'expo-status-bar';
import { Button,Pressable,StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import { CityScreen } from './src/screens/CityScreen'
import { CountryScreen } from './src/screens/CountryScreen'

const Stack = createStackNavigator();
const StackNavigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="CityPop"
      component={HomeScreen} 
    />
    <Stack.Screen
      name="Search By City"
      component={CityScreen} 
    />
    <Stack.Screen
      name="Search By Country"
      component={CountryScreen} 
    />
  </Stack.Navigator>
);

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>CityPop</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search By City')}
      >
        <Text>Search By City</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search By Country')}
      >
        <Text>Search By Country</Text>
      </TouchableOpacity>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CityPop" component={HomeScreen} options={{ title: 'CityPop' }}/>
        <Stack.Screen name="Search By City" component={CityScreen} options={{ title: 'Search By City' }}/>
        <Stack.Screen name="Search By Country" component={CountryScreen} options={{ title: 'Search By Country'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

