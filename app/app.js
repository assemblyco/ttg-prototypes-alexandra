/**
 * @flow
 */

//Library components
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { DrawerNavigator, DrawerItems, DrawerNavigatorConfig } from 'react-navigation';

//Custom components
import PageOne from './screens/pageOne';
import PageTwo from './screens/pageTwo';
import PageThree from './screens/pageThree';
import { CustomDrawerContentComponent } from './components/customDrawerContentComponent'

//Define the routes within the DraweNavigator function
export const InfiniteScroll = DrawerNavigator(
  {
    PageOne: { screen: PageOne },
    PageTwo: { screen: PageTwo },
    PageThree: { screen: PageThree }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'right',
    contentComponent: props => <CustomDrawerContentComponent { ...props }/>
  }
);
