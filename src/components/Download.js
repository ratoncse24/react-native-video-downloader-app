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
  Alert,
  processColor,
  Linking,
  Modal,
  TouchableHighlight,
  Keyboard,
  Animated,
  Easing, 
  PanResponder,
  ScrollView,
  PermissionsAndroid

} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab,Input, Left, Right,Button, Body, Icon, } from 'native-base';
 
const window = Dimensions.get("window"); 
import RNFetchBlob from 'react-native-fetch-blob'
const FileOpener = require('react-native-file-opener-fix'); 
import * as Progress from 'react-native-progress';
const Realm = require('realm');

import styles from './../style/Style'
import Config from './../constant/Config'
let jobId = -1;
var SQUARE_DIMENSIONS = 100;


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


const scalesPageToFit = Platform.OS === 'android';

export default class Download extends Component {
     
    static navigationOptions = {
        drawerIcon: (
            <Icon name='cloud-download' style={styles.menuIcon}/>
        ),
        title: "Download From Youtube"
    };

    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true,
        isSaveModal: false,
        showDownload: false,
        count: 0, 
        url: '',
        isAvilable: true,
        fileName: '',
        webViewTop:80,
        webViewBottom: 0,
        events: 'auto',
        type: '',
        top: -1000,
        pan: new Animated.ValueXY()
      };
      this.count = 0;
      this.animatedValue = new Animated.Value(0)
    }

 
 

    showInterstitial() {
      setTimeout(() => {  
        
        AdMobInterstitial.showAd().catch(error => console.warn(error));

       }, 500 ) 
    
    }




async requestCameraPermission() {
   const { goBack } = this.props.navigation;  
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Allow us',
        'message': 'Youtube Video Downloader want to access phone memory'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
     
    } else {
      goBack();
    }
  } catch (err) {
      goBack();
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
     // console.log("You can use the camera")
    } else {
      goBack();
    }
  } catch (err) {
       goBack();
  }
}

  componentDidMount() {
 
    this.requestCameraPermission();

    const { params } = this.props.navigation.state;  

    var top= -1000;

    if(params.type != 'youtube'){
      top = -700;
    } 

    this.setState({
      top: top
    })

  }

  
    componentWillUnmount() {
      AdMobRewarded.removeAllListeners();
      AdMobInterstitial.removeAllListeners();
   



    }

  
    saveToHistory(url){

      const Download = {
        name: 'Historys',
        primaryKey: 'id',
        properties: {
          id: 'int',
          name: 'string', 
          url: 'string', 
          date: 'string' 
        }
      }

      const databaseOptions = {
        path: 'Historys',
        schema: [Download]
      }

      var timeStamp = Math.floor(Date.now());
     
      var MyDate = new Date();  
      
      var date = ('0' + MyDate.getDate()).slice(-2) + '-'
                  + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
                  + MyDate.getFullYear() +' '+ ('0' + MyDate.getHours()).slice(-2) + ':'+ ('0' + (MyDate.getMinutes()+1)).slice(-2);
 
      Realm.open(databaseOptions)
        .then(realm => {
        
          realm.write(() => {
          
            realm.create('Historys', {
            name: this.state.fileName+".mp4",
            url: url,
            date: date,
            id: timeStamp,
            });

        });

        }).catch(error => {
          console.log(error);
        });

    }
  
    startDownload(){
      // var titleArr = url.split("="); 
      // var title = titleArr[titleArr.length - 1];
      
      var title = this.state.fileName;
    //  var url =  "https:\/\/r6---sn-4g5edned.googlevideo.com\/videoplayback?fvip=6&requiressl=yes&mime=video%2Fmp4&ratebypass=yes&lmt=1529142156035254&expire=1529930587&c=WEB&key=yt6&mt=1529908361&ipbits=0&mm=31%2C29&mn=sn-4g5edned%2Csn-4g5e6n7r&pl=51&source=youtube&ip=2a01%3A4f8%3A10a%3A3142%3A%3A2&mv=u&dur=199.064&itag=22&ms=au%2Crdu&fexp=23709359&sparams=dur%2Cei%2Cid%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&id=o-AF9gNvhg7jpdj6nCiM4dz3YH5WOi8g1V0oBA9UcVJxwt&ei=-44wW6WOEsGK7gPT07LQBQ"
    //  var url = "https://r8---sn-n3cgv5qc5oq-bh2ly.googlevideo.com/videoplayback?mime=video%2Fmp4&source=youtube&key=yt6&itag=22&ip=211.179.146.187&mt=1529898699&mv=m&ms=au%2Crdu&fexp=23709359&mm=31%2C29&pl=20&signature=BCC1FDA20DF124F02BD78CEC59E96B2595D9EEC7.94D664E203F4A061421460A1927450FF33E0DD36&id=o-AOaMeLXbzLZ1MBrBf-dEeB9w81xyacovVcmoMaTwa71q&dur=925.872&requiressl=yes&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ratebypass=yes&ipbits=0&expire=1529920409&lmt=1529560434418499&mn=sn-n3cgv5qc5oq-bh2ly%2Csn-oguelner&initcwndbps=1690000&c=WEB&ei=OGcwW9msOMbdqAGR4qD4Aw&fvip=4&video_id=GZxg7YDyqC8&title=Raghav+Juyal+Flirting+With+Katrina+Kaif"
     var url = this.state.url;
      var self = this;
 
      RNFetchBlob
        .config({
          // add this option that makes response data to be stored as a file,
          // this is much more performant.
          notification: true,
          indicator: true,
          fileCache : false,
          auto:true,
          mime : 'video/mp4', 
          appendExt : 'mp4',
          path : RNFetchBlob.fs.dirs.DocumentDir + "/" + title + ".mp4",
         // auto : true,
          addAndroidDownloads : {
            useDownloadManager : true, // <-- this is the only thing required
            path: RNFetchBlob.fs.dirs.DownloadDir+"/"+title +".mp4",
            // Optional, override notification setting (default to true)
            notification : false,
            // Optional, but recommended since android DownloadManager will fail when
            // the url does not contains a file extension, by default the mime type will be text/plain
           //  mime : 'text/plain',
            description : 'Youtube Video Downloader'
        }
        })
        .fetch('GET', url , {
          'Cache-Control': 'no-store'
          //some headers ..
        })
        .then((res) => {
          // the temp file path
          console.log('The file saved to ', res.path())
          var FilePath = res.path();

          self.saveToHistory(FilePath)

            if(Platform.OS == 'ios'){
              var FileMimeType = "video/mp4"
              FileOpener.open(
                FilePath,
                FileMimeType
            ).then((msg) => {
                console.log('success!!')
            },() => {
                console.log('error!!')
            });
          }
        

        })

    }

     DownloadNow(){

       this.setState({
         isSaveModal: false,
         isLoading: false,
       })
        this.startDownload();
       this.showInterstitial()
        
      
    }

    
      Downloads(url){
        console.log(url)

         if (url == 'http://qdownloader.net/') {
            this.webview.stopLoading();
            this.setState({
               isAvilable: false,
               isLoading: false,
            })
        } 
        

        const { params } = this.props.navigation.state; 
        var downloadForm = params.type;
        // var downloadForm = 'youtube';

        if(downloadForm == 'youtube'){
          var titleArr = url.split("="); 
          var title = "Mydownload_"+titleArr[titleArr.length - 1];
        }else if(downloadForm == 'dailymotion'){
          var titleArr = url.split("/"); 
          var title = "Mydownload_"+Date.now().toString();
        }
        else if(downloadForm == 'vimeo'){
          var title = "Mydownload_"+Date.now().toString();
        }
 
        else if(downloadForm == 'custom'){
          var title = "Mydownload_"+Date.now().toString();
        }
 

        var res = url.split("/");  

        if (res[2] == 'maxconverter.net') {
            this.webview.stopLoading();
            this.setState({
              isLoading: false,
            })
        } 

       

        if(res[2] != 'qdownloader.net' && res[2] != 'maxconverter.net'){
          this.webview.stopLoading();
          // if( this.count == 0){
          //   this.count = 1;
           // this.startDownload(url)

            this.setState({
              url: url,
              isSaveModal: true,
              fileName: title,
            })

         // }

        }
       
      }

      reload(){
        this.webview.reload();
      }

    
  render() {
          
           const { goBack } = this.props.navigation;   
           const { params } = this.props.navigation.state; 
           const URL = "https://qdownloader.net/download?video="+params.downloadURL;
       
        // const URL = 'https://en.savefrom.net/#url=http://youtube.com/watch?v=g4HDfqEWf6Y&utm_source=youtube.com&utm_medium=short_domains&utm_campaign=www.ssyoutube.com'
        // const URL = 'https://youtube.com'

 

    return (  
    <Container   style={styles.main_bg}>
         <StatusBar
          translucent={false}
          backgroundColor='transparent'
          barStyle="light-content"
        />  
 
       <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isSaveModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
          >  
          <Container contentContainerStyle={{flex: 1,}}  style={styles.main_bg}>
          <StatusBar
          translucent={false}
          backgroundColor='transparent'
          barStyle="light-content"
        />  

         <Header style={styles.mainHeader}  androidStatusBarColor={Config.STATUS_BAR} >
            <Button transparent style={styles.leftButton} onPress={() => this.setState({ isSaveModal: false})}>
              <Icon name='md-close' style={styles.iconColor}/>
            </Button>
          
          <Body>
            <Text style={styles.headerTitle}>Enter video file name</Text>
          </Body>
          
        </Header>

        <Content  contentContainerStyle={{flex:1, justifyContent: 'center',  }}>
 
          <View style={styles.saveFileArea}>
          
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#000000"
            style={styles.downloadName}
            placeholder="Enter file name" 
            onChangeText={(fileName) => this.setState({fileName})}
            value={this.state.fileName} 
            
        />  
          <TouchableOpacity onPress={() => this.DownloadNow()} style={styles.downloadButton} > 
          <Text style={styles.downloadButtonText}>
          <Icon name='md-download' style={styles.downloadIcon}/>  Start Download Now
          </Text>

          </TouchableOpacity>
         </View> 

        </Content>

          </Container> 

        </Modal>

      

      
       <Header style={styles.mainHeader}  androidStatusBarColor={Config.STATUS_BAR} >
          
            <Button transparent style={styles.leftButton} onPress={() => goBack()}>
              <Icon name='md-arrow-back' style={styles.iconColor}/>
            </Button>
          
          <Body>   
             <Text style={styles.headerTitle}>Download Now</Text> 
          </Body>
         
          
          
        </Header>

        <Content contentContainerStyle={{flex: 1,  alignItems: 'center', justifyContent: 'space-between',}}  scrollEnabled={false}  

                  >

                <View   pointerEvents={this.state.events} >
           {
              this.state.isLoading ? (
                <View style={styles.downloadLoadingArea}>
                    <Progress.CircleSnail color={['green', 'red', 'blue']} size={80}/>
                </View>
               ) : (null)

            }


            {this.state.isAvilable ? (

                  <WebView
                  ref={ref => (this.webview = ref)}
                  source={{uri: URL }}
                  style={{  width: window.width,  marginTop: Platform.OS == 'ios'? -1050 : this.state.top,  overflow: 'hidden', }}
                  onNavigationStateChange={event => {
                     this.Downloads(event.url);
                    
                  }}
               automaticallyAdjustContentInsets={true}
                scalesPageToFit={true}
                initialScale={100}
                  bounces={false}
                  scrollEnabled={true}
                  dragEnabled={false}
                  startInLoadingState={false}
                  onLoadStart={event => {
                    this.setState({
                      isLoading: true,
                    })
                  }}
                  onLoadEnd={event => {
                    setTimeout(() => { this.setState({ isLoading: false }) }, 1000 ) 
                  }}
       
              />  


              ): (

                 <View style={styles.hinss}>
                <Text  style={styles.iins}>Invalid video url !!!</Text>
                <Text style={styles.inss}>Play a video before press download button.</Text> 
                <Text style={styles.inss}>Enter valid video url for download.</Text> 
                </View>

              )}
       
 
                
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

          {/* <Footer style={styles.downloadFooter}>
            
            <View style={{marginTop: -50,}}>

            <View style={styles.downloadScreenInstruction}>
                  <Text style={styles.dInstructionText}>Not see the download button ?</Text>

                  <TouchableOpacity  style={styles.downloadReload} onPress={()=> this.startDownload()}>
                  <Text style={styles.downloadReloadText}> <Icon name='refresh' style={styles.iconReload}/> Reload</Text>
                 </TouchableOpacity>

              </View>


              <View style={styles.downloadScreenInstruction}>
                  <Text style={styles.dInstructionText}>Not downloading video ? uninstall and install apps again</Text>
              </View>

              </View>

               
          <View  style={styles.ADfooter}>
            <BannerExample title="Smart Banner">
                <AdMobBanner
                  adSize="smartBannerPortrait"
                  adUnitID={Config.GOOGLE_BANNER_AD_UNIT_ID}
                  ref={el => (this._smartBannerExample = el)}
                /> 
              </BannerExample>
         </View>
         
          
            </Footer> */}
 
      </Container> 
    );
  }
}
 