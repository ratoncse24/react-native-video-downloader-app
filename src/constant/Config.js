import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, 
} from 'react-native';


module.exports = {
    
    BG_ONE : '#389deb',
    BG_TWO : '#ef79a6',
    BG_THREE : '#2e7ca7',


    BG_GRAY : '#f2f6f9',
    COLOR_GRAY: '#788493',

    BG_BUTTON : '#107bce',
    
    STATUS_BAR : '#0f61a0',
    
    BUTTON_COLOR : '#fff',
    DOWNLOAD_BUTTON : '#e23b6b',
 

    AD_INTERVAL : 240000,

    // production mode

    GOOGLE_BANNER_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-2750345821296931/7853165404' : 'ca-app-pub-2750345821296931/7853165404',
  
    GOOGLE_REWARD_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-3940256099942544/5224354917' : 'ca-app-pub-3940256099942544/5224354917',
  
    GOOGLE_INTERSTITIAL_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-2750345821296931/2409267034' : 'ca-app-pub-2750345821296931/2409267034',
   
    // GOOGLE_BANNER_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-3940256099942544/6300978111' : 'ca-app-pub-3940256099942544/6300978111',
  
    // GOOGLE_REWARD_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-3940256099942544/5224354917' : 'ca-app-pub-3940256099942544/5224354917',
  
    // GOOGLE_INTERSTITIAL_AD_UNIT_ID: Platform.OS == 'ios'?  'ca-app-pub-3940256099942544/1033173712' : 'ca-app-pub-3940256099942544/1033173712',
  


}