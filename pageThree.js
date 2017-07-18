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

export class PageThree extends React.Component {
  //Navigation details
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{ uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/16025-200.png" }}
        style={[generalStyles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    console.log("page three is executed");
    return (
      <View style={generalStyles.container}>
        <Text style={generalStyles.welcome}>Page Three!</Text>
      </View>
    )
  }
}
