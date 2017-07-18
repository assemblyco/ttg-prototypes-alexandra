/*
 * @flow
 */

//Native Components
import React, { Component } from 'react';
import { Platform, AppRegistry } from 'react-native';

//Library Components
import { TabNavigator, TabBarBottom } from 'react-navigation';

//Custom Components
import { PageOne } from './pageOne';
import { PageTwo } from './pageTwo';
import { PageThree } from './pageThree'; 
import { PageFour } from './pageFour'; 
import { PageFive } from './pageFive'; 

const InfiniteScroll = TabNavigator(
  {
    PageOne: { screen: PageOne },
    PageTwo: { screen: PageTwo },
    PageThree: { screen: PageThree },
    PageFour: { screen: PageFour },
    PageFive: { screen: PageFive }
  },
  
  {
    headerMode: 'none', //No navbar at the top
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#525252',
      inactiveTintColor: '#a9a9a9',
      inactiveBackgroundColor: '#d8d8d8',
      showLabel: false, //No labels to be displayed on any platform
      style: {
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 100: 70,
      },
      tabStyle:{
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
      },
    },
  },
);

 AppRegistry.registerComponent('InfiniteScroll', () => InfiniteScroll);