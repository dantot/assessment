import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const defaultSpinner = props => (
  <View style={props.isMain ? styles.container : null}>
    <ActivityIndicator
      {...props}
      size={props.isMain ? 'large' : 'small'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    width: 50,
    height: 50
  }
});

defaultSpinner.defaultProps = {
  isMain: false
};

defaultSpinner.propTypes = {
  isMain: PropTypes.bool
};

export default defaultSpinner;
