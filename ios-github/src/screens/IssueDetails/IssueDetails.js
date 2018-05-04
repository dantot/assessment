import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import Moment from 'moment';

import DefaultSpinner from '../../components/UI/DefaultSpinner/DefaultSpinner';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class IssueDetailsScreen extends Component {
  static propTypes = {
    issueKey: PropTypes.number.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  };

  state = {
    issue: null,
    isLoaded: false
  };

  componentWillMount() {
    const issue = this.props.issues.find(i => i.id === this.props.issueKey);
    if (typeof issue === 'object' && issue !== null) {
      this.setState({
        issue,
        isLoaded: true
      });
    }
  }

  render() {
    let labels = null;
    if (!this.state.isLoaded) {
      return <DefaultSpinner isMain />;
    }
    if (this.state.issue.labels.length > 0) {
      labels = this.state.issue.labels.map(label => <Text key={label.id} style={{ color: `#${label.color}` }} >{ label.name }</Text>);
    }
    return (
      <View style={styles.container}>
        <HeadingText>{this.state.issue.title}</HeadingText>
        <Text>#{ this.state.issue.number }</Text>
        <Text>creation date: { Moment(this.state.issue.created_at).format('YYYY.MM.DD') }</Text>
        <Text>author login: { this.state.issue.user.login }</Text>
        <Image source={{ uri: this.state.issue.user.avatar_url }} style={styles.previewImage} />
        <Text>{labels}</Text>
        <Text>{this.state.issue.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  previewImage: {
    width: 200,
    height: 200,
    marginRight: 5
  }
});

const mapStateToProps = state => ({
  issues: state.isu.issues
});

export default connect(mapStateToProps)(IssueDetailsScreen);
