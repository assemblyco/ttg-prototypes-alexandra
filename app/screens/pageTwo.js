//@flow

import React, { Component } from 'react';
import { Text,
         TouchableOpacity,
         View
} from 'react-native';

import { generalStyles } from '../styles/generalStyles';
import { Logo } from '../components/logo';
import { InputField } from '../components/inputField';
import { SubmitButton } from '../components/submitButton';
import { PageThree } from './pageThree';

export class PageTwo extends Component {
  static navigationOptions = {
    title: 'Page Two',
  };

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <View style={ generalStyles.container }>
        <Logo />
        <InputField placeholder="Password"
                    secureTextEntry={ true }
                    testId={ "submitPasswordInput" } />
        <View style={ generalStyles.horizontalRule } />
        <SubmitButton onPress={ () => navigate('PageThree') }
                      title={ "SUBMIT" } />
      </View>
    );
  }
}
