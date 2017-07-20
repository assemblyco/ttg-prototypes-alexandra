/*
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

//Custom Components
import { generalStyles } from  './generalStyles'
import { Graph } from './graph'

export default class InfiniteScroll extends Component {
  render() {
    return (
      <View style={generalStyles.container}>
        <Graph />
        <Text style={generalStyles.welcome}>
            Call me MiniMe
        </Text>
      </View>
    );
  }
}
