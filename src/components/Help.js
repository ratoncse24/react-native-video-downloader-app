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

 
export default class Help extends Component {

  
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: false,
        isSaveModal: false,
        showDownload: false, 
        webViewTop: 0,
        webViewBottom: 0,
        type: '',
        link: ''
       // link: 'https://www.youtube.com/watch?v=s8eJkQIUnmQ',
      };  
    }

 

    componentWillMount(){
        const { params } = this.props.navigation.state;  
        this.setState({
          type: params.type
        })
    }
   
    
  render() {
    const { goBack } = this.props.navigation;   
    const { params } = this.props.navigation.state;  

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
            <Text style={styles.headerTitle}>{params.type} Video Download</Text>
          </Body>
          
        </Header> 

        <Content  contentContainerStyle={{padding:5}}>


        {
          this.state.type == 'Facebook' ? (
            <View style={styles.hinss}>
            <Text  style={styles.inss}>Step 1: Copy facebook video link from facebook apps.</Text>
            <Text style={styles.inss}>Step 2: Enter the copied video link to the input box.</Text>
            <Text style={styles.inss}>Step 3: Press on "Check for Download" button. </Text>
            </View>
          ) : ( null )}

        {
          this.state.type == 'Youtube' ? (
            <View style={styles.hinss}>
            <Text  style={styles.inss}>Step 1: From home screen press on "Youtube Video Download" button.</Text>
            <Text  style={styles.inss}>Step 2: Play a video from youtube .</Text>
            <Text style={styles.inss}>Step 3: Press on download icon for download current video.</Text>
            <Text style={styles.inss}>Step 4: Choose video quality and download. </Text>
            </View>
          ) : ( null )}
 {
          this.state.type == 'Vimeo' ? (
            <View style={styles.hinss}>
            <Text  style={styles.inss}>Step 1: From home screen press on "Vimeo Video Download" button.</Text>
            <Text  style={styles.inss}>Step 2: Play a video from vimeo .</Text>
            <Text style={styles.inss}>Step 3: Press on download icon for download current video.</Text>
            <Text style={styles.inss}>Step 4: Choose video quality and download. </Text>
            </View>
          ) : ( null )}
 {
          this.state.type == 'Dailymotion' ? (
            <View style={styles.hinss}>
            <Text  style={styles.inss}>Step 1: From home screen press on "Dailymotion Video Download" button.</Text>
            <Text  style={styles.inss}>Step 2: Play a video from vimeo .</Text>
            <Text style={styles.inss}>Step 3: Press on download icon for download current video.</Text>
            <Text style={styles.inss}>Step 4: Choose video quality and download. </Text>
            </View>
          ) : ( null )}

 {
          this.state.type == 'Browser' ? (
            <View style={styles.hinss}>
            <Text  style={styles.inss}>Step 1: From home screen press on "Web Browser" button.</Text>
            <Text  style={styles.inss}>Step 2: Play a video on web browser .</Text>
            <Text style={styles.inss}>Step 3: Press on download icon for download current video.</Text>
            <Text style={styles.inss}>Step 4: Choose video quality and download. </Text>
            </View>
          ) : ( null )}



        {
          this.state.type == 'Link' ? (
             <View style={styles.hinss}>
              <Text  style={styles.inss}>Step 1: Copy video link from any website.</Text>
              <Text style={styles.inss}>Step 2: Enter the copied video link to the input box.</Text>
              <Text style={styles.inss}>Step 3: Press on "Check for Download" button. </Text>
              </View>
          ) : (

            null

          )}
     
     

    



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
 