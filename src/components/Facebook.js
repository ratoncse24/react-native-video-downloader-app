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
 
import styles from './../style/Style'
import Config from './../constant/Config'
 
export default class Facebook extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name='cloud-download' style={styles.menuIcon}/>
        ),
        title: "Download From Facebook"
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
      if(res.length >= 4){
       var lastUrl = res[3].trim();
       if(lastUrl != ''){
         var action = lastUrl.split("?");
         if(action.length > 1){
           if(action[0] == 'watch'){
                // go to download screen
               this.props.navigation.navigate('Download', {
                 youtubeUrl: this.state.youtubeUrl
              })

            //  Linking.openURL("https://en.savefrom.net/#url="+this.state.youtubeUrl);

           }else{
            Alert.alert(
              "",
              "Please press on a single video before press on \'Download Video\' button .",
              [
                { text: "See How Download ?", onPress: () => this.setState({ isModal: true}) },
                { text: "Ok I Got It", onPress: () => console.log }
              ],
              { cancelable: false }
            );
           }
         } 
       }else{
        Alert.alert(
          "",
          "Please press on a single video before press on \'Download Video\' button .",
          [
            { text: "See How Download ?", onPress: () => this.setState({ isModal: true}) },
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
            { text: "See How Download ?", onPress: () => this.setState({ isModal: true}) },
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

      alert(data.url);

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
 

       <Header style={styles.mainHeader}  androidStatusBarColor={Config.BG_BUTTON} >
          
            <Button transparent style={styles.leftButton} onPress={() => goBack()}>
              <Icon name='md-arrow-back' style={styles.iconColor}/>
            </Button>
          
          <Body>  
            
             <Text style={styles.headerTitle}>Download Facebook Videos</Text>
         
          </Body>
         
          <Button transparent  transparent style={styles.rightButton}   onPress={() => this.setState({ isModal: true})}>
              <Icon name='ios-help-circle-outline' style={styles.iconColor} />
          </Button>
          
        </Header>

        <Content contentContainerStyle={{flex: 1,  alignItems: 'center', justifyContent: 'space-between',}}>
       
            

                <WebView
                ref={ref => (this.webview = ref)}
                source={{uri: 'https://m.facebook.com'}}
                style={{  width: window.width, flex: 1, marginTop: this.state.webViewTop}}
                onNavigationStateChange={event => {
                  this.checkUrl(event);
                }}
                automaticallyAdjustContentInsets={false}
                javaScriptEnabledAndroid={true}
                startInLoadingState={true}
     
            /> 
             

        </Content>
 
    <Footer style={styles.mainFooter}>

      
        <TouchableOpacity  style={styles.footerDownloadButton}  onPress={() => this.download() }> 
           <Text  style={styles.footerDownloadButtonText}> <Icon name='md-download' style={styles.downloadIcon}/>  Download Video</Text>
        </TouchableOpacity>
          
       
    </Footer>
 
          
  
      </Container> 
    );
  }
}
 