/**
 * @flow
 */

//Native components
import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { List, ListItem  } from 'react-native-elements';

//Import data
import { Dawgs } from './Dawgs'

export default class PageThree extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: Dawgs
    }
  }

  //Define the navigation options for this page
  static navigationOptions = {
    //drawerLabel acts as link
    drawerLabel: "Page Three",
    //drawerIcon is not required
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./flower.jpg")}
        style={{width: 24, height: 24}}
      />
    )
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Page Two!
        </Text>
        <Button
          title="Open Right Drawer"

          //Trigger the drawer on button click
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />

        <List style={{backgroundColor: "white"}}>
          <FlatList
            data={this.state.data}
            keyExtractor={ item => item.key }
            initialListSize={ 5 }
            renderItem={({item}) => <Image source={{uri: item.key}}
                                           style={styles.image} />}
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
  },
  image: {
    width: 420,
    height: 420
  }
});