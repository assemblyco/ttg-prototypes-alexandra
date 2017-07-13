/**
 * @flow
 */

//Native Components
import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Library Components
import { ListItem  } from 'react-native-elements';

export class Row extends Component{
  render() {
    
    return (
      <View style={ styles.container }>
        <Image source = {{ uri: this.props.item.picture.large }} style={ styles.photo } />
        <Text style={ styles.text }>
          { `${this.props.item.name.first} ${this.props.item.name.last}` }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
