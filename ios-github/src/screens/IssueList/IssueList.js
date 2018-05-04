import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

import DefaultSpinner from '../../components/UI/DefaultSpinner/DefaultSpinner';
import IssueList from '../../components/IssueList/IssueList';
import { getIssues } from '../../store/actions/index';

class IssueListScreen extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onGetIssues: PropTypes.func.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  };

  componentWillMount() {
    this.props.onGetIssues();
  }

  /* eslint-disable class-methods-use-this */
  onIssuePressHandler(issueKey) {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'iosgithub.IssueDetails'
      },
      passProps: {
        issueKey
      }
    });
  }

  render() {
    if (this.props.isLoading) {
      return <DefaultSpinner isMain />;
    }

    return (
      <View style={styles.container}>
        <IssueList issues={this.props.issues} onItemPress={issueKey => this.onIssuePressHandler(issueKey)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(IssueListScreen);
