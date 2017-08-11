/*
 * @flow
 */

//Library components
import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

//Custom components
import { generalStyles } from '../styles/generalStyles';
import { Logo } from '../components/logo';
import { InputField } from '../components/inputField';
import { SubmitButton } from '../components/submitButton';

export class PageOne extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      //For non-scrollable views KeyboardAvoidingView is pushing the view upwards to give room for keyboard
      <KeyboardAvoidingView behavior="padding" style={ generalStyles.container }>
        <Logo/>
        <InputField placeholder="Email" />
        <View
          style={ generalStyles.horizontalRule } />
        <SubmitButton onPress={ () => navigate('PageTwo') }
                      title={ "NEXT" }
                      testId={ "submitEmailButton" } />
      </KeyboardAvoidingView>
    );
  }
}
