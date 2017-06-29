import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  FlatList,
  Image,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

class Greeting extends Component {
  render(){
    return (
      <Text style={styles.instructions}> Hello {this.props.name}! </Text>
    )
  }
}

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true}

    //Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  
  render(){
    let display = this.state.showText ? this.props.text : " ";

    return(
      <Text>{display}</Text>
    );
  }
}

export default class InfiniteScroll extends Component {
  constructor (props){
    super(props);
    this.state = {text: ''};
  }

  _onPressButton(){
    Alert.alert('You tapped a button')
  }

  _onLongPressButton(){
    Alert.alert("You pressed the button too long and it doesn't like it")
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: "aliceblue"}}>
          <Text style={styles.welcome}>The next section is part of a ScrollView</Text>
          <Text>ScrollViews are good for small lists with limited amount of items {'\n'}
                as it renders them all at once.</Text>
        </View>

        <ScrollView>
          <View style={styles.nestedContainer}>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>
          
          <View style={styles.nestedContainer }>
            <Image source={pic} style={styles.image} />

            <Greeting name='Ale' />
            <Greeting name='Vlad' />
            
            <Image source={pic} style={styles.image} />
            <Blink text='Yes, this is doggo!' />

            <TextInput style={styles.textInput} 
                       placeholder='Type here to translate'
                       onChangeText={(text) => this.setState({text})} 
                      />
            <Text>
              {this.state.text.split(' ').map((word) => word && 'PizzaSlice').join('')}
            </Text>
          
            <Button onPress={this._onPressButton} title="BUTTON" />

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.textInput}>This is TouchableHighlight</Text>
              </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.textInput}>This is TouchableOpacity</Text>
              </View>
            </TouchableOpacity>

            <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.textInput}>This is TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableWithoutFeedback onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.textInput}
                      onLongPress={this._onLongPressButton}
                      >
                      This is TouchableWithoutFeedback. Press it long!</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>

        {/*<View style={{backgroundColor: 'aliceblue'}}>
          <Text style={styles.welcome}>The next section is a FlatList</Text>
          <Text>FlatLists is a List View good for API calls that return an infinite amount of data therefore we only render items that are displayed</Text>
        </View>

        <View style={{backgroundColor: 'aliceblue'}}>
          <FlatList 
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>*/}

        <View style={{backgroundColor: 'aliceblue'}}>
          <Text style={styles.welcome}>The next section is a SectionList</Text>
          <Text>SectionList is a List View good for API calls that return an infinite amount of data {'\n'}
                but you want it structured e.g. an alpabetically structured contacts list</Text>
        </View>

        <SectionList
          sections={[
            {title: 'D', data: ['Dan', 'Diana', 'Dora']},
            {title: 'E', data: ['Elena']},
            {title: 'F', data: ['Franz', 'Florin']}
          ]}

          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  nestedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'steelblue'
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'skyblue'
  },
  image: {
    width: 193,
    height: 110,
    flex: 1
  },
  textInput: {
    padding: 10,
    fontSize: 12
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

AppRegistry.registerComponent('InfiniteScroll', () => InfiniteScroll);
