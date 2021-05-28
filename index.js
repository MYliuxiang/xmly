/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import Index from './src/index'

AppRegistry.registerComponent(appName, () => Index);
