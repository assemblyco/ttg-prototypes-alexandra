//@flow

import React, { Component } from 'react';
import { View } from 'react-native';

export class PageTwo extends Component {
  render() {
    return (
      <View style={ generalStyles.container }>
        <Logo />
        <InputField
          placeholder="PASSWORD"
          onSubmitEditing={() => this.onSubmit()}
        />
        <View
          style={ generalStyles.horizontalRule }
        />
        <SubmitButton
          title={"SUBMIT"}
          onSubmitEditing={() => this.onSubmit()}
        />
      </View>
    );
  }
}
