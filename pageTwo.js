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

export class PageTwo extends React.Component {
  //Navigation details
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{ uri: "https://cdn1.iconfinder.com/data/icons/seo-pack-1/512/seo-34-512.png" }}
        style={ [generalStyles.icon, { tintColor: tintColor }] }
      />
    ),
  }

  render() {
    console.log("second page is executed");
    return (
      <View style={ generalStyles.container }>
        <Text style={ generalStyles.welcome }>Page Two!</Text>
      </View>
    )
  }
}
