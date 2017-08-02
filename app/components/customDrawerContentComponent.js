/**
 * @flow
 */

//Library components
import React from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';
import { DrawerItems } from 'react-navigation';

//Custom Components
import { styles } from '../styles';
import { SwitchButton } from './switchButton';

export const CustomDrawerContentComponent = (props) => {

  return(
    <ScrollView>
      <DrawerItems { ...props } />
      <SwitchButton />
    </ScrollView>
  );
}
