import React from 'react';
import AppContainer from './app/nav/AppNavigator';
import Timer from './app/Timer';

import { View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppContainer
          // onNavigationStateChange={handleNavigationChange}
          // uriPrefix="/app"
        />
        {/* <Timer/> */}
      </View>
    );
  }
}