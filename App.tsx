import { StatusBar } from 'expo-status-bar';
import { Button,StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import CityScreen from './screens'

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{

      }}>Home Screen</Text>
      <Button
        title="Search By City"
        onPress={() => navigation.navigate('Search By City')}
      />
      <Button
        title="Search By Country"
        onPress={() => navigation.navigate('Search By Country')}
      />
    </View>
  );
}



function CountryScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seacrhed by Country</Text>
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
});
