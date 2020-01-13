/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import Letter from './app/Letter'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Letter);
