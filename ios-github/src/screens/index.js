import { Navigation } from 'react-native-navigation';

import Issues from './Issues/Issues';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('iosgithub.Issues', () => Issues, store, Provider);
};

export default registerScreens;
