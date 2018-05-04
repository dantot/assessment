import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import registerScreens from './src/screens/index';
import configureStore from './src/store/storeConfig';

registerScreens(configureStore(), Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'iosgithub.Issues',
    title: 'Issues'
  }
});
