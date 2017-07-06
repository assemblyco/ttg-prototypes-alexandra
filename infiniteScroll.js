/**
 * @flow
 */

import React, { Component, PureComponent } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import { listData } from './data';

const LOAD_ITEMS = 55;

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    //Load the state with its expected type of data
    this.state = {
      loading: false,
      data: [],
      index: 0,
      error: null,
      refreshing: false
    };
  }

  // Instantiate the network request
  componentDidMount() {
    this.makeRequest();
  }

  //Make call to bring in local data 55 at a time
  makeRequest = () => {
    const { page, seed } = this.state;
    this.setState({
      data: [...this.state.data, ...listData.slice(this.state.index, this.state.index + LOAD_ITEMS)],
      index: this.state.index + LOAD_ITEMS,
      loading: false,
      refreshing: false
    });
  };

  loadMore = () => {
    this.setState(
      {
        data: [...this.state.data, ...listData.slice(this.state.index, this.state.index + LOAD_ITEMS)],
        index: this.state.index + LOAD_ITEMS,
      }, 
      () => {
        this.makeRequest();
      }
    )
  }

  renderSeparator = () => {
    return (
      <View
        style={styles.view}
      />
    );
  };

  render() {
    return (
      <List style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0, 
    borderBottomWidth: 0,
    backgroundColor: "white"
  },

  view: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%"
  }
})

export default InfiniteScroll;