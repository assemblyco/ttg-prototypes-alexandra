/**
 * @flow
 */

//Library components
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DrawerItems } from 'react-navigation';

//Custom Components
import { styles } from '../styles';

export const CustomDrawerContentComponent = (props) => {
  return(
    <ScrollView>
      <DrawerItems { ...props } />
      <Text>This is text!</Text>
    </ScrollView>
  );
}
