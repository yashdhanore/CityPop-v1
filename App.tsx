import { StatusBar } from 'expo-status-bar';
import { Button,Pressable,StyleSheet, Text, View, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import { CityScreen } from './src/screens/CityScreen'
import { CountryScreen } from './src/screens/CountryScreen'
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Styles} from './src/library/Styles'

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
    <View style={Styles.container}>
      <TouchableHighlight onPress={()=> ToastAndroid.show("Test Task for We Know IT", ToastAndroid.SHORT)}>
      <Image source={require('./assets/Logo1.png')} style={{maxHeight:100}}/>
      </TouchableHighlight>
     
      <TouchableOpacity
        style={Styles.buttonContainer}
        onPress={() => navigation.navigate('Search By City')}
      >
        <Text style={Styles.buttonTextContainer}>Search By City</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.buttonContainer}
        onPress={() => navigation.navigate('Search By Country')}
      >
        <Text style={Styles.buttonTextContainer}>Search By Country</Text>
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


