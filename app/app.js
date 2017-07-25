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
import PushNotification from 'react-native-push-notification';

import { generalStyles } from './styles/generalStyles';
import PushController from './controllers/pushController';

export default class App extends Component {
  constructor(props){
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      seconds: 5,
    }

    console.log(this.state.seconds);
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState){
    if(appState === 'background'){
      //More options for localNotificationSchedule here: https://github.com/zo0r/react-native-push-notification#scheduled-notifications
      let myDate = new Date(Date.now() + this.state.seconds * 1000);

      PushNotification.localNotificationSchedule({
        message: "Call me MiniMe!",
        number: '10',
        date: myDate,
        actions: '["OK"]',
      });
      console.log(this.state.seconds);
    }
  }

  render() {
    return (
      <View style={ generalStyles.container }>
        <Text style= { generalStyles.welcome }>
          You can call me MiniMe!
        </Text>
        <Text style= { generalStyles.instructions }>
          Choose your notification time in minutes
        </Text>
        <Picker 
          style={ generalStyles.picker } 
          selectedValue={ this.state.seconds }
          onValueChange={ (seconds) => this.setState({ seconds }) }
        >
          <Picker.Item label="5" value={ 5 } />
          <Picker.Item label="10" value={ 10 } />
          <Picker.Item label="15" value={ 15 } />
        </Picker>
        <PushController />
      </View>
    );
  }
}
