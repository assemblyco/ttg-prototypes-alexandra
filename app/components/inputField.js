//@flow

//Library components
import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

//Custom components
import { generalStyles } from '../styles/generalStyles';
import * as Colors from '../config/colors.config';

export class InputField extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TextInput
        style={ generalStyles.inputField }
        placeholder= { this.props.placeholder }
        placeholderTextColor={ Colors.COLOR_WHITE }
        keyboardType="email-address"
        //iOS handler
        returnKeyType="next"
        //android handler
        returnKeyLabel="Next"
        //Make the underline transparent so it doesn't show for aesthetic reasons
        underlineColorAndroid= "rgba(0, 0, 0, 0)"
        autoCorrect={ false } />
    )
  }
}
