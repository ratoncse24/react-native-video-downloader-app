"use strict";
var React = require("react-native");
var { Dimensions, StyleSheet, Platform } = React; 
const window = Dimensions.get("window");
import Config from './../constant/Config'

module.exports = StyleSheet.create({
    primary_bg: {  
        flex:1,  
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    main_bg: {
        backgroundColor: Config.BG_GRAY
    },
    loadingArea: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 9999999999
    },
    downloadLoadingArea: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        height: window.height - 30,
        width: window.width,
        zIndex: 9999999999
    },
    fDbutton: {
        flex:1, 
        padding: 10, 
    },
    loadingImage: {
        flex: 1,
        resizeMode: 'contain' ,
        zIndex: 9999999999
    },
    downloadListArea: {
        // width: window.width-20,
        // height: window.height - 80, 
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    downloadList: {
        height:  60,
        width: window.width-10,
        backgroundColor: '#fff', 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,

    },
    downloadListImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    downloadListHeading: {
        fontSize:16,
        color: Config.COLOR_GRAY,
        marginLeft: 10,
    },
    fontButtonTitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
    },
    fontButton: {
        width: window.width / 3 - 30,
        height: 75,
        backgroundColor: '#007cde69',
        marginRight: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    fontImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    fontButtonText: {
        fontSize: 12,
        color: '#fff',
    },
    fbutton: {
        flex: 0.3,
      //  flexDirection: 'row',
      //  justifyContent:'center',
        alignItems: 'center',
    },
    ffbutton: {
        flex:1,
        alignItems: 'center',
    },
    fontButtonArea: {
        flex: 1,
        flexDirection: 'row'
    },
    fDownlaodButton: {  
      padding:10,
      backgroundColor: Config.BG_BUTTON, 
      marginTop:80,
      marginLeft:50,
      marginRight:50,
      borderRadius: 40,
    },
    fServiceButton: {  
        
      padding:10,
      backgroundColor: Config.BG_BUTTON, 
      marginTop:80,
      marginLeft:30,
      marginRight:30,
      borderRadius: 40,
    },
    fDownlaodButtonText: {
      fontSize:20,
      textAlign: 'center',
      color: Config.BUTTON_COLOR, 
    }, 
    fLogo: {
        flex:.8,
        justifyContent: 'center',
        alignItems: 'center'
      }, 
      fHowButton: { 
          justifyContent: 'center',
          alignItems: 'center'
      }, 
      fHowButtonText: { 
        fontSize:16,
        textAlign: 'center',
        color: '#fff', 
        fontWeight: 'bold',
      }, 
    Logo: {
         width: 100, 
         height: 100,
         resizeMode: 'stretch'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
      image: {
        width: 320,
        height: 320,
      },
      buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainHeader: {
          backgroundColor: Config.BG_BUTTON
      },
      iconColor:{
          color: '#fff'
      },
      menuIcon: {
        color: 'blue',
        fontSize: 24,
      },
      headerTitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginLeft: Platform.OS == 'ios' ? -40 : 15,
      },

      headerTitles: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginLeft: Platform.OS == 'ios' ? -40 : 15,
      },
      leftButton: {
          marginLeft: -20,
      },
      rightButton: {
          marginRight: -20,
      },
      sideLogo: {
        width: 50, 
        height: 50,
        marginTop: 10,
        resizeMode: 'stretch'
      },
      sideHeader: { 
          height: Platform.OS == 'ios' ? 80 :70,
          backgroundColor: Config.BG_BUTTON
      },
      mainFooter: {
          backgroundColor: 'transparent', 
          marginBottom: Platform.OS == 'ios' ? 0 : - 0,
          flexWrap: "wrap", 
          height: 49,
      },
      browserFooter: {
          backgroundColor: 'transparent', 
          marginBottom: Platform.OS == 'ios' ? 0 : - 0,
          flexWrap: "wrap", 
          height: 49,
          flexDirection: 'row',
          borderTopColor: Config.BG_GRAY
      },
      downloadFooter: {
         backgroundColor: '#f9f9f9',
      // backgroundColor: 'green',
        marginBottom: Platform.OS == 'ios' ? 0 : -10,
        height: window.height - 500,
        borderTopColor: Config.BG_GRAY, 
        flexDirection: 'column'
      },
      transparentFooter: {
        backgroundColor: 'transparent',
        borderTopColor: Config.BG_GRAY
      },
      aboutText: {
          fontSize: 20,
          color: Config.COLOR_GRAY,
          padding: 20,
          textAlign: 'center'
      },
      leftBack: {
          position: 'absolute',
          left: 10,
          bottom: 15, 
          backgroundColor: 'rgba(29, 27, 27, 0.47)',
          height: 40,
          width:40,
          borderRadius: 300,
          justifyContent: 'center',
          alignItems: 'center',

      },
      iconBack: {
          fontSize:28,
          color: '#fff',
          marginLeft: 10,
          marginTop: -3
      },
      downloadName: {
          color: Config.COLOR_GRAY, 
          paddingLeft: 10,
          width: window.width - 40,
          backgroundColor: 'white',
          height: 50,
          borderBottomLeftRadius:6,
          borderBottomRightRadius: 6,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          fontSize: 17, 
          marginTop: Platform.OS == 'ios' ? 0 : 5,
          paddingBottom: 0,
          paddingTop: Platform.OS == 'ios' ? 15 : 0,
          textAlign: 'center',
          padding: 5
      },
      footerText: {
          fontSize: 16, 
          color: '#fff',
          marginTop: 5,
      },
      footerTextBold: {
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 5,
      },
      footerDownloadButton: { 
           // padding: 10,
            height: 60,
            width: 60,
            backgroundColor: Config.BG_BUTTON,
            // backgroundColor: 'red',
             justifyContent: 'center',
             alignItems:'center',
             position: 'absolute',
             right: 5,
             bottom: 5,
             borderRadius: 30
            
      },
      BfooterDownloadButton: { 
            padding: 10,
            height: 50,
            width: window.width/2,
            backgroundColor: 'green',
            borderBottomWidth: 1,
            borderBottomColor: 'gray'
      },
      HfooterDownloadButton: { 
            padding: 10,
            height: 50,
            width: window.width/2,
            backgroundColor: Config.BG_BUTTON,
            borderBottomWidth: 1,
            borderBottomColor: 'gray'
      },

      footerDownloadButtonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      downloadIcon: {
        fontSize: 23,
        color: '#fff', 
      },
      modalArea: {
          height: window.height - 40,
          width: window.width - 40,
          backgroundColor: Config.DOWNLOAD_BUTTON
      },
      saveFileArea: {
            flex:1,   
            justifyContent: 'center', 
            alignItems: 'center'
      },
      fbins:{
        marginTop: -100,
            padding: 10,
            // backgroundColor: 'red',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
      },
      hins:{ 
            padding: 10,
            // backgroundColor: 'red',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
      },
      inss:{
        fontSize: 17,
        color: Config.COLOR_GRAY,
        marginTop: 10,
         
      },
      iins:{
        fontSize: 20,
        color: 'red',
        marginTop: 10,
        textAlign: 'center'
         
      },
      ins:{
        fontSize: 14,
        color: Config.COLOR_GRAY,
      },
      downloadButton: {
            height: 40,
            width: window.width - 140,
            backgroundColor: Config.BG_BUTTON,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            justifyContent: 'center',
            alignItems:'center',
            marginTop: 20,
            borderRadius: 3,
      },

      downloadButtonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
      },
      downloadItem: {
        width: window.width-10,
        padding: 10, 
        backgroundColor: '#fff',  
        flexDirection: 'row', 
        marginTop: 5,
        borderRadius: 4, 
      },
      downloadItemHeading: {
          fontSize: 16,
          color: Config.COLOR_GRAY,
          paddingLeft: 5,
           
      },
      helpItemInfoHeading: {
            fontSize: 18,
            color: Config.COLOR_GRAY,
            paddingLeft: 5,
      },
      downloadItemDate: {
          fontSize: 12,
          color: Config.COLOR_GRAY,
          paddingLeft: 5,
          paddingTop: 3,
         
      }, 
      downloadItemInfo: {
        flex: 4, 
        justifyContent: 'center',  
    },

    deleteIconArea: {
      width: 40,
      justifyContent: 'flex-end',
      alignItems: 'center',  
  },
  deleteIcon: {
      fontSize: 35,
      color: 'red',  
  }, 
  plusIcon: {
      fontSize: 25,
      color: Config.COLOR_GRAY,  
  }, 
    downloadScreenInstruction: {
        width: window.width,
        height: 40,
        padding: 10,
        backgroundColor: '#fff', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    dInstructionText: {
        fontSize: 12,
        color: Config.COLOR_GRAY,  
    },
    downloadReloadArea: { 
         padding: 10,
         backgroundColor: '#fff', 
         justifyContent: 'center',
         alignItems: 'center'
     }, 
     downloadReload: {
        width: 100,
        height: 35,
        backgroundColor: 'yellow',
        padding: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    downloadReloadText: {
        fontSize: 16,
        textAlign: 'center',
        color: Config.COLOR_GRAY,  
    },
    iconReload: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    helpItemInfo: {
        flex:1,
        flexDirection: 'row'
    },
    helpLeft: { 
        flex:5,  
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    helpRight:{
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    ADcontainer: {
        marginTop: (Platform.OS === 'ios') ? 30 : 10,
      },
      ADexample: {
        paddingVertical: 0,
        
      },
      ADtitle: {
        margin: 10,
        fontSize: 20,
      },
      ADfooter: {
          height: 49,
        //  marginTop: -10,
          borderTopColor: Config.BG_GRAY,
          backgroundColor: Config.BG_GRAY,
          position: 'absolute',
          bottom: 0,
          left: 0,
      }












  });
 