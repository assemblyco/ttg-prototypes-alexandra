//@flow

//Library components
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

//Custom components
import * as Fonts from '../config/fonts.config';

export const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525252',
    padding: 20
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
  },
  logo: {
    fontSize: 90,
    fontWeight: "900",
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.BLACK,
  },
  inputField: {
    height: 36,
    marginTop: 80,
    fontFamily: Fonts.EXTRA_LIGHT,
  },
  buttonContainer: {
    borderRadius: 2,
    backgroundColor: "white",
    alignSelf: "stretch",
    paddingVertical: 15
  },
  buttonText: {
    color: "#525252",
    textAlign: "center",
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2
  },
  horizontalRule: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    alignSelf: "stretch",
    marginBottom: 30
  }
});
