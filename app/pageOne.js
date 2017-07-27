/*
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  View
} from 'react-native';

import { generalStyles } from './styles/generalStyles';
import { Logo } from './components/logo';
import { InputField } from './components/inputField';
import { SubmitButton } from './components/button'

export class PageOne extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={ generalStyles.container }>
        <Logo />
        <InputField
          placeholder="Email"
          onSubmitEditing={() => this.onSubmit()}
        />
        <View
          style={ generalStyles.horizontalRule }
        />
        <SubmitButton
          title={"NEXT"}
          onSubmitEditing={() => this.onSubmit()}
        />
      </KeyboardAvoidingView>
    );
  }
}
