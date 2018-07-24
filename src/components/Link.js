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
  Alert,
  Modal, 
  TextInput,
  TouchableHighlight,
  Linking,
  Keyboard,
  Animated,
  Easing,
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

 
export default class Link extends Component {
 
    static navigationOptions = {
        drawerIcon: (
            <Icon name='link' style={styles.menuIcon}/>
        ),
        title: "Download by Link"
    };



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
      this.animatedValue = new Animated.Value(0)
    }

    componentWillMount(){
        const { params } = this.props.navigation.state;  
        this.setState({
          type: params.type
        })
    }
   
    

    checkLink(){

    // Linking.openURL("https://en.savefrom.net/#url=https://www.youtube.com/watch?v=0w62ddeVwGE");
      if(this.state.link != ''){

        

              this.props.navigation.navigate('Download', {
                  downloadURL: this.state.link,
                  type: 'custom',
               })

      }else{

      }


    }
  
 
    
  render() {
    const { goBack } = this.props.navigation;   

    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
       outputRange: [0, this.state.webViewTop]
    })
    const marginBottom = this.animatedValue.interpolate({
      inputRange: [0, 1],
       outputRange: [0, this.state.webViewBottom]
    })

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
            <Text style={styles.headerTitle}>Download by Link</Text>
          </Body>
         
          <Button transparent  transparent style={styles.rightButton}  onPress={() => this.props.navigation.navigate('Howto')}>
              <Icon name='ios-help-circle-outline' style={styles.iconColor} />
          </Button>
          
        </Header>

        <Content contentContainerStyle={{flex:1, justifyContent: 'center',  }}>


        <View style={styles.saveFileArea}>

        {
          this.state.type == 'facebook' ? (
            <View style={styles.fbins}>
            <Text  style={styles.ins}>Step 1: Copy facebook video link from facebook apps.</Text>
            <Text style={styles.ins}>Step 2: Enter the copied video link to the input box.</Text>
            <Text style={styles.ins}>Step 3: Press on "Check for Download" button. </Text>
            </View>
          ) : (

             <View style={styles.fbins}>
              <Text  style={styles.ins}>Step 1: Copy video link from any website like " Youtube , Dailymotion , Vimeo , Facebook , Twitter, Instragram ,Google" etc.</Text>
              <Text style={styles.ins}>Step 2: Enter the copied video link to the input box.</Text>
              <Text style={styles.ins}>Step 3: Press on "Check for Download" button. </Text>
              </View>

          )}
     


          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor = {Config.COLOR_GRAY}
            style={styles.downloadName}
            placeholder="Enter video link for download" 
            onChangeText={(link) => this.setState({link})}
            value={this.state.link}
            multiline = {true}
            numberOfLines = {4}
            
        />  
          <TouchableOpacity onPress={() => this.checkLink()} style={styles.downloadButton} > 
          <Text style={styles.downloadButtonText}>
          <Icon name='md-search' style={styles.downloadIcon}/>  Check for Downlaod
          </Text>

          </TouchableOpacity>

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
 