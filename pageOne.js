/*
 * @flow
 */

//Native Components
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Custom components
import { generalStyles } from './generalStyles'

export class PageOne extends React.Component {
  //Navigation details
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri: "https://cdn0.iconfinder.com/data/icons/science-10/450/robot-512.png"}}
        style={[generalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    console.log("page one is executed");
    return (
      <View style={generalStyles.container}>
        <Text style={generalStyles.welcome}> Page One! </Text>
      </View>
    );
  }
}
