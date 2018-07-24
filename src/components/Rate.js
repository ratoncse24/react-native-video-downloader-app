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
  Linking
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right,Button, Body, Icon, } from 'native-base';
 
const window = Dimensions.get("window");
 
import styles from './../style/Style'
import Config from './../constant/Config'

 
 
export default class Rate extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name='ios-happy-outline' style={styles.menuIcon}/>
        ),
        title: "Rate This Apps"
    };


      constructor(props) {
      super(props);
      this.state = { 
        url: 'https://play.google.com/store/apps/details?id=com.octal360.video.downloader',
        
      };
    }




  componentWillMount(){
     Alert.alert(
              "Rate This Apps",
              "",
              [
                { text: "Rate Now", onPress: () => Linking.openURL(this.state.url) },
              //  { text: "Ok I Got It", onPress: () => console.log }
              ],
              { cancelable: false }
            );
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
            <Text style={styles.headerTitle}>Rate This Apps</Text>
          </Body>
          
        </Header>

        <Content>
            


        </Content>  


      </Container> 
    );
  }
}
 