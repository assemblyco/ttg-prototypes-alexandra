//@flow

//Library components
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Custom components
import { generalStyles } from '../styles/generalStyles';

export class SubmitButton extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <TouchableOpacity style={ generalStyles.buttonContainer }
                        onPress={ this.props.onPress }>
        <Text style={ generalStyles.buttonText }>
          { this.props.title }
        </Text>
      </TouchableOpacity>
    )
  }
}
