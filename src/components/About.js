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
  Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right,Button, Body, Icon, } from 'native-base';
 
const window = Dimensions.get("window");
 
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

 const about = 'Youtube Video Downloader help you to downlaod video from some popular video website.\n The website list are Youtube, Dailymotion,Vimeo,Facebook etc.\n By this apps you can download video and store it to your mobile memory for offline use . \n This apps also store video downlaod history . \n You can also open video file from the video download history.';
 
export default class About extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='ios-information-circle-outline' style={styles.menuIcon}/>
        ),
        title: "About Apps"
    };


 

    
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
            <Button transparent style={styles.leftButton}  onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' style={styles.iconColor}/>
            </Button>
          
          <Body>
            <Text style={styles.headerTitle}>About Apps</Text>
          </Body>
          
        </Header>

        <Content>
            

            <Text style={styles.aboutText}>

                {about}

            </Text>



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
 