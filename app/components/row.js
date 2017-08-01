/**
 * @flow
 */

//Library Components
import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Custom Components
import { ListItem  } from 'react-native-elements';
import { styles } from '../styles';

export class Row extends Component{
  render() {
    return (
      <View style={ styles.listContainer }>
        <Image source = {{ uri: this.props.item.picture.large }} style={ styles.photo } />
        <Text style={ styles.text }>
          { `${this.props.item.name.first} ${this.props.item.name.last}` }
        </Text>
      </View>
    );
  }
}
