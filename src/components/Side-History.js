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
const Realm = require('realm');
const FileOpener = require('react-native-file-opener-fix'); 

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


export default class History extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name='ios-list' style={styles.menuIcon}/>
        ),
        title: "Download History"
    };

    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        isModal: false, 
        isSaveModal: false,  
        historys: []
      };
 
    }

    componentWillMount() {
 
   

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
    var self = this;

    Realm.open(databaseOptions)
      .then(realm => {
       
       const Historys = realm.objects('Historys');

       var arr = this.state.historys;
 
       Historys.forEach((realmObj,index) => { 
         var data = {
           id: realmObj.id,
           name: realmObj.name,
           url: realmObj.url,
           date: realmObj.date,
         }
        arr.push(data)

        this.setState({
         historys: arr
        })
        // console.log(realmObj)
        // console.log(realmObj.url)

         });
        
      })
      .catch(error => {
        console.log(error);
      });


    }



  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
    AdMobInterstitial.removeAllListeners();
  }




    removeFile(obj,index){

      var arr = this.state.historys;

      arr.splice(index, 1);

      this.setState({
        historys: arr
      })

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

    var self = this;

    Realm.open(databaseOptions)
      .then(realm => {

       const Historys = realm.objects('Historys');
       Historys.forEach((realmObj,index) => { 
        if(realmObj.id == obj.id){ 
            realm.write(() => { 
            realm.delete(realmObj);

        });

        
        }

         });
        
      })
      .catch(error => {
        console.log(error);
      });


    }
  

    openFile(FilePath){

      var FileMimeType = "video/mp4"
      FileOpener.open(
        FilePath,
        FileMimeType
    ).then((msg) => {
        console.log('success!!')
    },() => {
      Alert.alert(
        "",
        "File not found!",
        [
          { text: "Ok", onPress: () => console.log }
        ],
        { cancelable: false }
      );
    });

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
          
       <Button transparent style={styles.leftButton}  onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' style={styles.iconColor}/>
            </Button>
          
          <Body>   
             <Text style={styles.headerTitle}>Download History</Text>
          </Body>
          
          
        </Header>

        <Content contentContainerStyle={{padding:5}}>
         
             {
              this.state.isLoading ? (
                <View style={styles.loadingArea}>
                   <Progress.CircleSnail color={['green', 'red', 'blue']} size={80}/>
                </View>
               ) : (null)
            }

            {/* <Text>{JSON.stringify(this.state.historys)}</Text> */}

          {
            this.state.historys.reverse().map((data,index) => {
              return(
                <TouchableOpacity style={styles.downloadItem} key={index} onPress={() => this.openFile(data.url)}>
                <View  style={styles.downloadItemInfo}>
                  <Text style={styles.downloadItemHeading} numberOfLines={1}>{data.name}</Text>
                  <Text  style={styles.downloadItemDate} >{data.date}</Text>
                </View>
               <TouchableOpacity  style={styles.deleteIconArea}  onPress={() => this.removeFile(data, index)}>
               <Text> <Icon name='ios-close' style={styles.deleteIcon}/></Text></TouchableOpacity>
            </TouchableOpacity>

              )

          })
        }

           
         


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
 