import {View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react';

export function Touchabledemo() {
  const [lastPressed, setLastPressed] = useState('None');

  return (
    <View>
      <Text>Last Pressed: {lastPressed}</Text>

      <TouchableHighlight
        onPress={() => setLastPressed('TouchableHighlight')}
        underlayColor="lightgray"
        style={{ marginVertical: 10, padding: 10, backgroundColor: 'skyblue' }}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => setLastPressed('TouchableOpacity')}
        activeOpacity={0.6}
        style={{ marginVertical: 10, padding: 10, backgroundColor: 'lightgreen' }}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={() => setLastPressed('TouchableWithoutFeedback')}
      >
        <View style={{ marginVertical: 10, padding: 10, backgroundColor: 'lightcoral' }}>
          <Text>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}