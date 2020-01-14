import React from 'react';
import AppContainer from './app/nav/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        // onNavigationStateChange={handleNavigationChange}
        // uriPrefix="/app"
      />
    );
  }
}