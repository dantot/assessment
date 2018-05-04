import Config from 'react-native-config';

import { SET_ISSUES } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';

export const getIssues = () => {
  const result = (dispatch, getState) => {
    dispatch(uiStartLoading());
    const { expireDate } = getState().isu;
    if (new Date(expireDate) <= new Date() && expireDate !== null) {
      dispatch(uiStopLoading());
      return;
    }

    fetch(`https://api.github.com/repos/${Config.REPO_USERNAME}/${Config.REPO_NAME}/issues`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        dispatch(uiStopLoading());
        throw new Error();
      })
      .then(parsedRes => {
        const issues = [];
        console.log(parsedRes);
        for (const issue of parsedRes) {
          issues.push({
            ...issue
          });
        }
        dispatch(uiStopLoading());
        dispatch(setAddresses(issues));
      })
      .catch(err => {
        dispatch(uiStopLoading());
        throw new Error(err);
      });
  };
  return result;
};

export const setAddresses = issues => {
  const now = new Date();
  return {
    type: SET_ISSUES,
    issues,
    expireDate: now.setSeconds(now.getSeconds() + Config.EXPIRE_CACHE_TIME)
  };
};
