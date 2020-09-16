import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabsScreen from './src/screen/TabsScreen';
import ListScreen from './src/screen/ListScreen';

const navigator = createStackNavigator(
  {
    TabsScreen: TabsScreen ,
    ListScreen: ListScreen,
    
  },
  {
    initialRouteName:'TabsScreen',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

 
