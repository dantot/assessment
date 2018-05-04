import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

headingText.defaultProps = {
  style: null
};

headingText.propTypes = {
  style: PropTypes.number,
  children: PropTypes.node.isRequired
};

export default headingText;
