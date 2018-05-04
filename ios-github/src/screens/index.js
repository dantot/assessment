import { Navigation } from 'react-native-navigation';

import IssueList from './IssueList/IssueList';
import IssueDetails from './IssueDetails/IssueDetails';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('iosgithub.IssueList', () => IssueList, store, Provider);
  Navigation.registerComponent('iosgithub.IssueDetails', () => IssueDetails, store, Provider);
};

export default registerScreens;
