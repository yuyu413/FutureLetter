import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Letter from '../Letter';
import Timer from '../Timer';

const RootStack = createStackNavigator({ 
  Letter : { screen: Letter },
  Timer : { screen : Timer }
});
const AppContainer = createAppContainer(RootStack);

export default AppContainer;