//@flow

//Library components
import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

//Custom components
import { generalStyles } from '../styles/generalStyles';

export class InputField extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <TextInput
        style={generalStyles.inputField}
        placeholder= {this.props.placeholder}
        placeholderTextColor="white"
        keyboardType="email-address"
      />
    )
  }
}
