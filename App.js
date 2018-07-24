import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

import { Container,  } from 'native-base';
 

import WebView from 'WebView';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fluidSizeIndex: 0,
    };
  }

  
 

  render() {
    return (
     <Container>

        <WebView
          source="https://youtube.com"
          scrollEnabled={false}
      />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'ios') ? 30 : 10,
    flex:1,
  },
  footer: {
    flex: 1,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  buttons: {
    width: 350,
    height: 100,
    backgroundColor: 'green'
  },
});
 