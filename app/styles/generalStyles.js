//@flow

//Library components
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

//Custom components
import * as Fonts from '../config/fonts.config';
import * as Colors from '../config/colors.config';

export const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_BLACK,
    padding: 20
  },
  logo: {
    fontSize: 90,
    fontWeight: "900",
    textAlign: 'center',
    color: Colors.COLOR_WHITE,
    fontFamily: Fonts.FONT_BLACK
  },
  inputField: {
    height: 36,
    marginTop: 80,
    alignSelf: "stretch",
    fontFamily: Fonts.FONT_EXTRA_LIGHT,
    color: "pink"
  },
  buttonContainer: {
    borderRadius: 2,
    backgroundColor: "white",
    alignSelf: "stretch",
    paddingVertical: 15
  },
  buttonText: {
    color: Colors.COLOR_BLACK,
    textAlign: "center",
    fontFamily: Fonts.FONT_REGULAR,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2
  },
  horizontalRule: {
    borderBottomColor: Colors.COLOR_WHITE,
    borderBottomWidth: 0.5,
    alignSelf: "stretch",
    marginBottom: 30
  }
});
