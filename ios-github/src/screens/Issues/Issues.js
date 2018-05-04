import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Text } from 'react-native';

class IssuesScreen extends Component {

  static propTypes = {}

  render() {
    return (
      <Text>IssuesScreen</Text>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesScreen);
