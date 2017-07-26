/*
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { generalStyles } from './styles/generalStyles';
import { Logo } from './components/logo';
import { InputField } from './components/inputField';

export class PageOne extends Component {
  render() {
    return (
      <View style={generalStyles.container}>
        <Logo />
        <InputField />
      </View>
    );
  }
}
