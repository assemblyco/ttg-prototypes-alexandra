/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PageOne extends React.Component {

  //Define the navigation options for this page
  static navigationOptions = {
    //drawerLabel acts as link
    drawerLabel: "Page One",
    //drawerIcon is not required
    drawerIcon: ( {tintColor} ) => (
      <Image 
        source={require('./flower.jpg')}
        style={{width: 24, height: 24}}
      />
    )
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Page One!
        </Text>
        <Button
          title="Open Right Drawer"
          //Trigger the drawer on button click
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});