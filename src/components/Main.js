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
  Dimensions,
  PermissionsAndroid
} from 'react-native';



import { Container, Header, Title, Content, Footer, FooterTab, Left, Right,Button, Body, Icon, } from 'native-base';
 
const window = Dimensions.get("window");
 
import styles from './../style/Style'
import Config from './../constant/Config'
import Intro from './Home'
import firebase from 'react-native-firebase'; 


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

  firebase.analytics().setAnalyticsCollectionEnabled(true);

export default class Main extends Component {

  static navigationOptions = {
    drawerIcon: (
        <Icon name='ios-home-outline' style={styles.menuIcon}/>
    ),
    title: "Home"
};
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      showIntro: false,  
    }; 
  }

async requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Allow us',
        'message': 'Youtube Video Downloader want to access phone memory'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }

    try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        'title': 'Allow us',
        'message': 'Youtube Video Downloader want to read memory'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

 

  componentDidMount() {
 
  this.requestCameraPermission();
  
   // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(Config.GOOGLE_INTERSTITIAL_AD_UNIT_ID);

    AdMobInterstitial.addEventListener('adLoaded',
      () => console.log('AdMobInterstitial adLoaded')
    );
    AdMobInterstitial.addEventListener('adFailedToLoad',
      (error) => console.warn(error)
    );
    AdMobInterstitial.addEventListener('adOpened',
      () => console.log('AdMobInterstitial => adOpened')
    );
    AdMobInterstitial.addEventListener('adClosed',
      () => {
        console.log('AdMobInterstitial => adClosed');
        AdMobInterstitial.requestAd().catch(error => console.warn(error));
      }
    );
    AdMobInterstitial.addEventListener('adLeftApplication',
      () => console.log('AdMobInterstitial => adLeftApplication')
    );

    AdMobInterstitial.requestAd().catch(error => console.warn(error));

    setInterval(function(){

    AdMobInterstitial.showAd().catch(error => console.warn(error));

    

    }, Config.AD_INTERVAL);

  }

  componentWillUnmount() { 
  //  AdMobInterstitial.removeAllListeners();
  }
 

  showInterstitial() {
    AdMobInterstitial.showAd().catch(error => console.warn(error));
  }

  
    
  render() {
 
    return ( 
      <Container  style={styles.main_bg}>
         <StatusBar
          translucent={false}
          backgroundColor='transparent'
          barStyle="light-content"
        />  
    
     <Header style={styles.mainHeader}  androidStatusBarColor={Config.STATUS_BAR} >
          
            <Button transparent style={styles.leftButton} onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' style={styles.iconColor}/>
            </Button>
          
          <Body>
            <Text style={styles.headerTitle} onPress={this.showRewarded}>Youtube Video Downloader</Text>
          </Body>
         
          <Button transparent  transparent style={styles.rightButton}  onPress={() => this.props.navigation.navigate('Howto')}>
              <Icon name='ios-help-circle-outline' style={styles.iconColor} />
          </Button>
          
        </Header>

        <Content>
        <View  style={styles.fDbutton}>

          <View style={styles.downloadListArea}>


               <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Youtube')}>
              <Image  style={styles.downloadListImage}  source={require('./../images/youtube.png')} />
              <Text style={styles.downloadListHeading}>Youtube Video Download</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Dailymotion')}>
              <Image  style={styles.downloadListImage}  source={require('./../images/dailymotion.png')} />
              <Text style={styles.downloadListHeading}>Dailymotion Video Download</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Vimeo')}>
              <Image  style={styles.downloadListImage}  source={require('./../images/vimeo.png')} />
              <Text style={styles.downloadListHeading}>Vimeo Video Download</Text>
            </TouchableOpacity>

             
            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Link',{type: 'facebook'})}>
              <Image  style={styles.downloadListImage}  source={require('./../images/facebook.png')} />
              <Text style={styles.downloadListHeading}>Facebook Video Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Link',{type: 'custom'})}>
              <Image  style={styles.downloadListImage}  source={require('./../images/link.png')} />
              <Text style={styles.downloadListHeading}>Download By Video Link</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('Browser')}>
              <Image  style={styles.downloadListImage}  source={require('./../images/google.png')} />
              <Text style={styles.downloadListHeading}>Web Browser</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadList}   onPress={() => this.props.navigation.navigate('History')}>
              <Image  style={styles.downloadListImage}  source={require('./../images/download.png')} />
              <Text style={styles.downloadListHeading}>Download History</Text>
            </TouchableOpacity>

          </View>

            </View>
            
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
 