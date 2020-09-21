import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabsScreen from './src/screen/TabsScreen';
import ListScreen from './src/screen/ListScreen';
import ImageScreen from './src/screen/ImageScreen';
import ImageDetail from './src/Components/ImageDetail';
import FileViewer from './src/screen/FileViewer';
import MultipleViewer from './src/screen/MultipleViewer';

const navigator = createStackNavigator(
  {
    TabsScreen: TabsScreen ,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    ImageDetail: ImageDetail,
    FileViewer: FileViewer,
    MultipleViewer: MultipleViewer
    
  },
  {
    initialRouteName:'TabsScreen',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

 
