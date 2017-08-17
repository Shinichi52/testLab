/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined,
      text: '',
      loginSuccess: false
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          Welcome
        </Text>

        <TextInput
          testID='text_input'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='login_button' onPress={this.onButtonPress.bind(this, 'Login Test')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    if (this.state.loginSuccess) return <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>
        SUCCESS
      </Text>
    </View>
    return (
      <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25 }}>
          {this.state.greeting}!!!
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting,
      loginSuccess: this.state.text === '123456'
    });
  }
}

AppRegistry.registerComponent('example', () => example);
