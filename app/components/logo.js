//@flow

//Library Components
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

//Custom Components
import { generalStyles } from '../styles/generalStyles';

export class Logo extends Component {
  render(){
    return(
      <View>
        <Text style={generalStyles.logo}>TTG</Text>
      </View>
    )
  }
}