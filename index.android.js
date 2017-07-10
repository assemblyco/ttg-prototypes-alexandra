/**
 * @flow
 */

import { AppRegistry } from 'react-native';

//Import the DrawerNavigator 
import { DrawerNavigator } from 'react-navigation';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import PageThree from './pageThree';


//Define the routes within the DraweNavigator function
const InfiniteScroll = DrawerNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
  PageThree: { screen: PageThree }
});

AppRegistry.registerComponent('InfiniteScroll', () => InfiniteScroll);