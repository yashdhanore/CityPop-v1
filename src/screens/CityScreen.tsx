import {Text, View, TextInput } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {Styles} from '../library/Styles'
import React from 'react';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={{flex:1, alignSelf:'stretch'}}>
      <Text style={{textTransform: 'uppercase'}}>Search By City</Text>
      <TextInput
        placeholder="useless placeholder"
        autoCorrect = {true}
        multiline = {false}
        numberOfLines={2}
        maxLength={100}
        style={Styles.input}
      />
    </SafeAreaView>
  );
};

export function CityScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <UselessTextInput/>
      </View>
    );
  }

  export default UselessTextInput;