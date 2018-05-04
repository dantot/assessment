import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem/ListItem';

const issueList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.issues}
    keyExtractor={issue => issue.id.toString()}
    renderItem={issue => (
      <ListItem
        itemKey={issue.item.id}
        onItemPress={issueKey => props.onItemPress(issueKey)}
        title={issue.item.title}
        number={issue.item.number}
        created_at={new Date(issue.item.created_at)}
        author_login={issue.item.user.login}
        labels={issue.item.labels}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

issueList.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      user: PropTypes.shape({
        login: PropTypes.string.isRequired
      }).isRequired,
      labels: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    }).isRequired
  ).isRequired
};

export default issueList;
