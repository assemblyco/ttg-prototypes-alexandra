/*
 * @flow
 */

//Native Components
import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

//Custom components
import { generalStyles } from './generalStyles';

export class PageTwo extends React.Component {
  //Taken out the navigationOptions object since this page does not get rendered anymore
  render() {
    console.log("second page is executed");

    //The return function will not be rendered anymore therefore we can comment / delete it
    // return (
    //   <View style={ generalStyles.container }>
    //     <Text style={ generalStyles.welcome }>Page Two!</Text>
    //   </View>
    // )
  }
}
