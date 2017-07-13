/**
 * @flow
 */

//Native Components
import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Library Components
import { List, ListItem  } from 'react-native-elements';

//Custom Components
import { Row } from './row';

//Import data
import { listData } from './data';

export default class PageOne extends React.Component {

  constructor(props){
    super(props);

    this.state={
      data: listData.slice(0, 14),
    };
  }

  //Define the navigation options for this page
  static navigationOptions = {
    //drawerLabel acts as link
    drawerLabel: "Page One",
    //drawerIcon is not required
    drawerIcon: ( {tintColor} ) => (
      <Image 
        source={ require('./flower.jpg') }
        style={{ width: 24, height: 24 }}
      />
    )
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>
          Page One!
        </Text>
        <Button
          title="Open Right Drawer"
          //Trigger the drawer on button click
          onPress = { () => this.props.navigation.navigate('DrawerOpen') }
        />
        <List style={{ backgroundColor: "white" }}>
          <FlatList
            data = { this.state.data }
            keyExtractor = { item => item.email }
            //One way of improving the initial rendering time is specifying
            //the minimum number of list items to be displayed on first load
            initialListSize={ 14 }
            //this can also be written as 
            //renderItem={ ({item}) => <Row item={item} />}
            renderItem={ (data) => <Row item={ data.item } /> }
            
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0, 
    borderBottomWidth: 0,
    backgroundColor: "white"
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
  }
});