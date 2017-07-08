import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {
  const { title } = item;
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => null}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10
  }
});

export default ListItem;
