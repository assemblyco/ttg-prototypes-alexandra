/*
 * @flow
 */

import React, { Component } from 'react';
import {
  AppState,
  Picker,
  Text,
  View,
} from 'react-native';

import { generalStyles } from './styles/generalStyles';
import PushController from './controllers/pushController';

export default class App extends Component {
  constructor(props){
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      seconds: 5,
    }
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState){
    if(appState === 'background'){
      console.log("app is in the background", this.state.seconds);
    }
  }

  render() {
    return (
      <View style={ generalStyles.container }>
        <Text style= {generalStyles.welcome }>
          Choose your notification time in minutes
        </Text>
        <Picker 
          style={ generalStyles.picker } 
          selectedValue={ this.state.seconds }
          onValueChange={(seconds) => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
    );
  }
}
