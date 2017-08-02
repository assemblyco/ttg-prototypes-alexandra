//@flow

//Library components
import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

//Custom components
import { styles } from '../styles';

export class SwitchButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      switchValue: true
    }
  }

  toggleSwitch = (value) => this.setState({ switchValue: value });

  render(){
    return(
      <View style={ styles.container }>
        <Text style={ styles.text} >{ this.state.switchValue ? 'Wax on' : 'Wax off' }</Text>
        <Switch onValueChange={ this.toggleSwitch }
                value={ this.state.switchValue }
                style={ styles.toggleButton }
                //Background color when the switch is turned on
                onTintColor='#a9a9a9'
                //Color of the foreground switch grip
                thumbTintColor='#727272'
                //Border color on iOS and background color on Android when the switch is turned off
                //tintColor='black'
        />
      </View>
    )
  }
}
