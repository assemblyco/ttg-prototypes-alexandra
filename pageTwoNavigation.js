/*
 * @flow
 */

//Library Components
import React, { Component } from 'react';
import { Platform, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

//Custom Components
import { generalStyles } from './generalStyles';

//Import the two nested pages
import { Techs } from './techs'
import { Colleagues } from './colleagues'

export const PageTwoNavigation = TabNavigator(
  {
    Techs: { screen: Techs },
    Colleagues: { screen: Colleagues }
  },

  {
    swipeEnabled: true,
    tabBarPosition: 'top',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#525252',
      inactiveTintColor: '#a9a9a9',
      inactiveBackgroundColor: '#d8d8d8',
      style: {
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 100: 70,
      },
      labelStyle: {
        fontSize: 13,
      },
      tabStyle:{
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
      },
    },
  },
);

//Specify the navigationOptions in this file since the parent page (PageTwo) does not get rendered anymore
PageTwoNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Image
    source={{ uri: "https://cdn1.iconfinder.com/data/icons/seo-pack-1/512/seo-34-512.png" }}
    style={ [generalStyles.icon, { tintColor: tintColor }] }
  />
  ),
};
