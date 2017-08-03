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
import { PageOne } from './pageOne';

export class PageThree extends Component {
  static navigationOptions = {
    title: 'Page Three',
  };

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <View style={ generalStyles.container }>
        <Logo />
        <Text>
          Welcome to our app!
        </Text>
        <SubmitButton onPress={ () => navigate('PageOne') }
                      title={ "BACK TO START" } />
      </View>
    );
  }
}
