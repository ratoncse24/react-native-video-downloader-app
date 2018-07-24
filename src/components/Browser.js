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

 
export default class Browser extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name='search' style={styles.menuIcon}/>
        ),
        title: "Browser Search Video"
    };

    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        isModal: false, 
        isSaveModal: false,
        url: 'http://google.com/',
        browserUrl: 'http://google.com/',
        webViewTop: -0,
      };
    }


 


    goNow(){

      this.props.navigation.navigate('Download', {
        downloadURL: this.state.url,
        type: 'custom',
     })

     }
  
    checkUrl(data){
   
      console.log(data)
      this.setState({
        url: data.url
      })
  
  }
   

  download(){

    this.setState({ isLoading: true })
    this.webview.reload(); 
    setTimeout(() => { this.goNow(this.state.url); this.setState({ isLoading: false }) }, 3000 ) 
  
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
            
             <Text style={styles.headerTitle}>Browser</Text>
          
 
         
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
                source={{uri: this.state.browserUrl }}
                style={{  width: window.width, flex: 1 }}
                onNavigationStateChange={event => {
                  this.checkUrl(event);
                }}
                automaticallyAdjustContentInsets={false}
                javaScriptEnabledAndroid={true}
                startInLoadingState={false}
     
            />  
             
           
       <TouchableOpacity  style={styles.footerDownloadButton}  onPress={() => this.download() }> 
           <Text  style={styles.footerDownloadButtonText}><Icon name='md-download' style={styles.downloadIcon}/></Text>
        </TouchableOpacity>
  
        </Content>
 
 <Footer style={styles.browserFooter}> 


{/* <TouchableOpacity  style={styles.BfooterDownloadButton}  onPress={() => this.download() }> 
   <Text  style={styles.footerDownloadButtonText}> <Icon name='md-download' style={styles.downloadIcon}/>  Download </Text>
</TouchableOpacity>  */}

{/* <TouchableOpacity  style={styles.HfooterDownloadButton}  onPress={() => this.download() }> 
   <Text  style={styles.footerDownloadButtonText}> <Icon name='ios-list' style={styles.downloadIcon}/>   History </Text>
</TouchableOpacity>  */}


          <View  style={styles.ADfooter}>
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
 