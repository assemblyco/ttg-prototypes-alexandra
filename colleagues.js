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

export class Colleagues extends React.Component {

  render() {
    console.log("Colleagues page is executed");
    return (
      <View style={ generalStyles.container }>
        <Text style={ generalStyles.welcome }>Colleagues Page!</Text>
      </View>
    )
  }
}
