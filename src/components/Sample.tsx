import {Text, View, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';

interface IState {
  name: {val1: string; val2: boolean; age: number};
}
export class Sample extends Component<IState> {
  state = {
    name: {
      val1: '',
      val2: false,
      age: 0,
    },
  };
  render() {
    console.log(this.state.name);
    return (
      <View>
        <Text>Sample</Text>
        <TouchableHighlight
          onPress={() => {
            this.setState(
              (prevState: {
                name: {val1: string; val2: boolean; age: number};
              }) => ({name: {...prevState.name, age: prevState.name.age + 1}}),
            );
          }}>
          <Text>Click</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Sample;
