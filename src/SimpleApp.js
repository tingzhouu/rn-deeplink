import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

export default SimpleApp = createAppContainer(
  createStackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
  })
);