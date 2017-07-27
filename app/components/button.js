//@flow

//Library components
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Custom components
import { generalStyles } from '../styles/generalStyles';

export class SubmitButton extends Component {
  render(){
    return(
      <TouchableOpacity
        style={ generalStyles.buttonContainer }
      >
        <Text
          style={ generalStyles.buttonText }
        >
          { this.props.title }
        </Text>
      </TouchableOpacity>
    )
  }
}
