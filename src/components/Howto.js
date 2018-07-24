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
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right,Button, Body, Icon } from 'native-base';

import styles from './../style/Style'
import Config from './../constant/Config'


import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';

const BannerExample = ({ style, title, children, ...props }) => (
  <View {...props} style={[styles.ADexample, style]}>
    <View>
      {children}
    </View>
  </View>
);

 
export default class Howto extends Component {


    static navigationOptions = {
      drawerIcon: (
          <Icon name='ios-help-circle-outline' style={styles.menuIcon}/>
      ),
      title: "How It Works"
  };


  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      showIntro: false,  
    }; 
  }
  
  

    _onDone(){
        this.props.navigation.navigate('Main')
    }
    
    
  render() {
    const { goBack } = this.props.navigation;   
    return ( 
      <Container   style={styles.main_bg}>
         <StatusBar
          translucent={false}
          backgroundColor='transparent'
          barStyle="light-content"
        />  

         <Header style={styles.mainHeader}  androidStatusBarColor={Config.STATUS_BAR} >
            <Button transparent style={styles.leftButton} onPress={() => goBack()}>
              <Icon name='md-arrow-back' style={styles.iconColor}/>
            </Button>
       
          
          <Body>
            <Text style={styles.headerTitle}>How It Works</Text>
          </Body>
 
          
        </Header> 

        <Content  contentContainerStyle={{padding:5}}>

           <TouchableOpacity style={styles.downloadItem} 
           onPress={()=> this.props.navigation.navigate('Help', {   type: 'Youtube' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}> How download from Youtubess</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>


           <TouchableOpacity style={styles.downloadItem} 
           onPress={()=> this.props.navigation.navigate('Help', {   type: 'Dailymotion' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}>How download from Dailymotion</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>

           <TouchableOpacity style={styles.downloadItem} 
           onPress={()=> this.props.navigation.navigate('Help', {   type: 'Vimeo' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}>How download from Vimeo</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadItem} 
              onPress={()=> this.props.navigation.navigate('Help', {   type: 'Facebook' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}>How download from Facebook</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>


           <TouchableOpacity style={styles.downloadItem} 
           onPress={()=> this.props.navigation.navigate('Help', {   type: 'Link' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}>How download from Video Link</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>


           <TouchableOpacity style={styles.downloadItem} 
           onPress={()=> this.props.navigation.navigate('Help', {   type: 'Browser' })}>
                <View  style={styles.helpItemInfo}>
                  <View style={styles.helpLeft}>
                      <Text style={styles.helpItemInfoHeading}>How download from Browser</Text>
                  </View>
                  <View style={styles.helpRight}>
                  <Icon name='ios-arrow-forward' style={styles.plusIcon}/>
                  </View>
                </View>
               
            </TouchableOpacity>

 

        </Content>
           
        <Footer style={styles.ADfooter}>

          <BannerExample title="Smart Banner">
          <AdMobBanner
            adSize="smartBannerPortrait"
            adUnitID={Config.GOOGLE_BANNER_AD_UNIT_ID}
            ref={el => (this._smartBannerExample = el)}
          /> 
          </BannerExample>


        </Footer>
      </Container> 
    );
  }
}
 