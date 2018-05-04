import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Moment from 'moment';

const listItem = props => {
  let labels = null;
  if (props.labels.length > 0) {
    labels = props.labels.map(label => <Text key={label.id} style={{ color: `#${label.color}` }} >{ label.name }</Text>);
  }
  return (
    <TouchableOpacity onPress={() => props.onItemPress(props.itemKey)}>
      <View style={styles.listItem}>
        <Text>#{ props.number } - { props.title }</Text>
        <Text>{ labels } { props.author_login } { Moment(props.created_at).format('YYYY.MM.DD') }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#ddd'
  }
});

listItem.propTypes = {
  itemKey: PropTypes.number.isRequired,
  onItemPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  created_at: PropTypes.instanceOf(Date).isRequired,
  author_login: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default listItem;
