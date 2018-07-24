import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator ,DrawerNavigator, DrawerItems} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right,Button, Body, Icon, } from 'native-base';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import styles from './../style/Style'
import Config from './../constant/Config'
import Home from './../components/Home';
import Main from './../components/Main';
import Howto from './../components/Howto';
import SHowto from './../components/Side-Howto';
import SHistory from './../components/Side-History';
import About from './../components/About';
import Privacy from './../components/Privacy';
import Youtube from './../components/Youtube';
import Link from './../components/Link';
import Download from './../components/Download';
import Dailymotion from './../components/Dailymotion';

import Facebook from './../components/Facebook';
import Vimeo from './../components/Vimeo';
import Browser from './../components/Browser';
import History from './../components/History';
import Help from './../components/Help';
import Rate from './../components/Rate';

import Example from './../components/Example';




const CustomDrawerContent = (props) => (
    <Container>

        <Header  androidStatusBarColor={Config.STATUS_BAR} style={styles.sideHeader}>

            
          <Image  style={styles.sideLogo}  source={require('./../images/logo.png')} />
            
            <Body>

                 <Text style={styles.headerTitles}>Youtube Video Downloader</Text>

            </Body> 

        </Header>

        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>
)

const MyApp = DrawerNavigator({
    Home: {  screen: Main,  navigationOptions: {  header:false,  }, },
    // Youtube: {  screen: Youtube,  navigationOptions: {  header:false,  }, },
    // Dailymotion: {  screen: Dailymotion,  navigationOptions: {  header:false,  }, },
    // Vimeo: {  screen: Vimeo,  navigationOptions: {  header:false,  }, },
    // Facebook: {  screen: Facebook,  navigationOptions: {  header:false,  }, },
    // Link: {  screen: Link,  navigationOptions: {  header:false,  }, },
    // Browser: {  screen: Browser,  navigationOptions: {  header:false,  }, },
      Historys: {  screen: SHistory,  navigationOptions: {  header:false,  }, },
      Howtos: {  screen: SHowto,  navigationOptions: {  header:false,  }, }, 
      Privacys: {  screen: Privacy,  navigationOptions: {  header:false,  }, },
      Abouts: {  screen: About,  navigationOptions: {  header:false,  }, }, 
      Rate: {  screen: Rate,  navigationOptions: {  header:false,  }, }, 
  
  },{
      initialRouteName: "Home",
      contentComponent: CustomDrawerContent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
  });

export default RootStack = StackNavigator({
    Main: { screen: Home, }, 
    Homes: { screen: MyApp, }, 
    Howto: {  screen: Howto, },
    Download: {  screen: Download, },
    Youtube: {  screen: Youtube, },
    Dailymotion: {  screen: Dailymotion, },
    Vimeo: {  screen: Vimeo, },
    Facebook: {  screen: Facebook, },
    Link: {  screen: Link, },
    Browser: {  screen: Browser, },
    History: {  screen: History, },
    Help: {  screen: Help, },
  }, {
  initialRouteName: "Main",
  headerMode: 'none',
  transitionConfig: getSlideFromRightTransition
});