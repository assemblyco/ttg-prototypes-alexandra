/**
 * @flow
 */

//Library components
import React from 'react';
import {  StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  image: {
    width: 420,
    height: 420
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  listContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
