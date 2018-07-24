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
  TextInput,
  Dimensions,
  Linking,
  Alert,
  Modal, 
  TouchableHighlight,
  Keyboard
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab,Input, Left, Right,Button, Body, Icon, } from 'native-base';
 
const window = Dimensions.get("window");
import * as Progress from 'react-native-progress';

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

 
 
export default class Vimeo extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name='cloud-download' style={styles.menuIcon}/>
        ),
        title: "Download From Vimeo"
    };

    constructor(props) {
      super(props);
      this.state = { 
        isLoading: false,
        isModal: false, 
        isSaveModal: false,
        search: '',
        youtubeUrl: 'http://m.youtube.com/',
        webViewTop: -0,
      };
    }

 
    
     checkDownload(url){ 

      var res = url.split("/");  
      var videoID = res[res.length - 1];
      videoID = videoID.trim();
      console.log(videoID);

      if(videoID != ''){

        videoID = parseInt(videoID);

       var ID = Number.isInteger(videoID);
        console.log(ID)
           if(ID){
                // go to download screen
               this.props.navigation.navigate('Download', {
                 downloadURL: this.state.youtubeUrl,
                 type: 'vimeo'
              })

           }else{
            Alert.alert(
              "",
              "Please press on a single video before press on \'Download Video\' button .",
              [
                { text: "See How Download ?", onPress: () => this.props.navigation.navigate('Howto') },
                { text: "Ok I Got It", onPress: () => console.log }
              ],
              { cancelable: false }
            );
           }
        
      }else{
        Alert.alert(
          "",
          "Please press on a single video before press on \'Download Video\' button .",
          [
            { text: "See How Download ?", onPress: () => this.props.navigation.navigate('Howto') },
            { text: "Ok I Got It", onPress: () => console.log }
          ],
          { cancelable: false }
        );
      }
     }
  
    checkUrl(data){
   
      this.setState({
        youtubeUrl: data.url, 
      })

      console.log(data.url)

      // if(this.state.count > 2){
        
 
      //  if(Platform.OS != 'ios'){
       
      //    this.androidDownload(data.url);
      //  }else{
 
      //     this.iosdDownload(data.url)
 
      //  }
      // }

     // this.setState({ count: this.state.count + 1})
    
  }
   

    download(){
      this.setState({ isLoading: true })
     this.webview.reload(); 
      setTimeout(() => { this.checkDownload(this.state.youtubeUrl); this.setState({ isLoading: false }) }, 3000 ) 

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
           
           
             <Text style={styles.headerTitle}>Download Vimeo Videos</Text>
         
          </Body>
         
          <Button transparent  transparent style={styles.rightButton}    onPress={() => this.props.navigation.navigate('Howto')}>
              <Icon name='ios-help-circle-outline' style={styles.iconColor} />
          </Button>
          
        </Header>

        <Content contentContainerStyle={{flex: 1,  alignItems: 'center', justifyContent: 'space-between',}}>
       
           {
              this.state.isLoading ? (
                <View style={styles.loadingArea}>
                   <Progress.CircleSnail color={['green', 'red', 'blue']} size={80}/>
                </View>
               ) : (null)
            }


                <WebView
                ref={ref => (this.webview = ref)}
                source={{uri: 'https://vimeo.com'}}
                style={{  width: window.width, flex: 1, marginTop: this.state.webViewTop}}
                onNavigationStateChange={event => {
                  this.checkUrl(event);
                }}
                automaticallyAdjustContentInsets={false}
                javaScriptEnabledAndroid={true}
                startInLoadingState={false}
                
                onLoadStart={event => {
                  this.setState({
                    isLoading: false,
                  })
                }}
                onLoadEnd={event => {
                  this.setState({
                    isLoading: false,
                  })
                }}
     
            /> 
                   
        <TouchableOpacity  style={styles.footerDownloadButton}  onPress={() => this.download() }> 
           <Text  style={styles.footerDownloadButtonText}><Icon name='md-download' style={styles.downloadIcon}/></Text>
        </TouchableOpacity>
       

        </Content>
 
    <Footer style={styles.mainFooter}>

    
         
        <View style={styles.ADfooter}>

          <BannerExample title="Smart Banner">
          <AdMobBanner
            adSize="smartBannerPortrait"
            adUnitID={Config.GOOGLE_BANNER_AD_UNIT_ID}
            ref={el => (this._smartBannerExample = el)}
          /> 
          </BannerExample>


          </View>
    </Footer>
  
      </Container> 
    );
  }
}
 