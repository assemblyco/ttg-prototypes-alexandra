//@flow

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { PageOne } from '../screens/pageOne';
import { PageTwo } from '../screens/pageTwo';
import { PageThree } from '../screens/pageThree';

export const Nav = StackNavigator(
  {
    PageOne: { screen: PageOne },
    PageTwo: { screen: PageTwo },
    PageThree: { screen: PageThree }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
