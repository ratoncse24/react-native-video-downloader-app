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

 
 const about = 'Youtube Video Downloader are not take any personal information from your device.\n  Youtube Video Downloader  never use any user information from user device. \n Video download history also store to local database . \n We are not take download history from our user. \n So fell free to use this application. \n This application just help you to download video from online \n And make it reuseable offile for your device. \n\n Youtube Video Downloader  ';
 
export default class Privacy extends Component {

    // static navigationOptions = ({ navigation }) => ({ 
    // headerTitle: "Home",
    // header: null
    // });


    static navigationOptions = {
        drawerIcon: (
            <Icon name='unlock' style={styles.menuIcon}/>
        ),
        title: "Privacy Policy"
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
            <Text style={styles.headerTitle}>Privacy Policy</Text>
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
 