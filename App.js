import React from 'react';
import AppContainer from './app/nav/AppNavigator';
import Timer from './app/Timer';

export default class App extends React.Component {
  render() {
    return (
      // <AppContainer
      //   // onNavigationStateChange={handleNavigationChange}
      //   // uriPrefix="/app"
      // />
      <Timer/>
    );
  }
}