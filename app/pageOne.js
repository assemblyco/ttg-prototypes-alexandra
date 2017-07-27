/*
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import { generalStyles } from './styles/generalStyles';
import { Logo } from './components/logo';
import { InputField } from './components/inputField';
import { SubmitButton } from './components/button'

export class PageOne extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={ generalStyles.container }>
        <Logo />
        <InputField placeholder="Email" />
        <View
          style={ generalStyles.horizontalRule }
        />
        <SubmitButton
          title={"NEXT"}
        />
      </View>
    );
  }
}
