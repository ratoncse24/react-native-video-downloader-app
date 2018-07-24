import { AppRegistry } from 'react-native';

 import Route from './src/route/Route';

// import Route from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('Video', () => Route);
