/**
 * @flow
 */

import { AppRegistry } from 'react-native';

//Import the DrawerNavigator 
import { DrawerNavigator } from 'react-navigation';

import PageOne from './pageOne';
import PageTwo from './pageTwo';

//Define the routes within the DrawerNavigator function
const InfiniteScroll = DrawerNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
});

AppRegistry.registerComponent('InfiniteScroll', () => InfiniteScroll);
