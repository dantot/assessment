import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import DefaultSpinner from '../../components/UI/DefaultSpinner/DefaultSpinner';
import { getIssues } from '../../store/actions/index';

class IssuesScreen extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onGetIssues: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.onGetIssues();
  }

  render() {
    let issueList = <Text>IssuesScreen</Text>;

    if (this.props.isLoading) {
      issueList = <DefaultSpinner isMain />;
    }

    return (
      <View style={styles.container}>
        {issueList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
  issues: state.isu.issues
});

const mapDispatchToProps = dispatch => ({
  onGetIssues: () => dispatch(getIssues())
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesScreen);
