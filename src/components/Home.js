import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon } from 'native-base';
 
// import { 
//     AdMobBanner, 
//     AdMobInterstitial, 
//     PublisherBanner,
//     AdMobRewarded
//   } from 'react-native-admob'

import { StackActions, NavigationActions } from 'react-navigation';

   
import styles from './../style/Style'
import Config from './../constant/Config'
 
export default class Intro extends Component {

    static navigationOptions = ({ navigation }) => ({
    headerTitle: "Intro",
    header: null
    });

    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        showIntro: true, 
      }; 
    }
  
  
    componentWillMount() {
     setTimeout(() => { 

   //   this.props.navigation.navigate('Homes');

   const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Homes' })],
  });
  this.props.navigation.dispatch(resetAction);

      }, 1000 ) 

    }
  

    componentDidMount() {

       

        // AdMobInterstitial.setAdUnitID('ca-app-pub-5849391930799625/3441561610');
        // AdMobInterstitial.setTestDeviceID('EMULATOR');
        // AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
    }
    
  render() {
    return ( 
     <Container style={{ backgroundColor: Config.BG_ONE}}>
         <StatusBar
          translucent={false}
          backgroundColor={Config.STATUS_BAR}
          barStyle="light-content"
        />  
            <View  style={styles.fLogo}>
                <Image  style={styles.Logo}  source={require('./../images/logo.png')} />
            </View>

      </Container> 
    );
  }
}
 