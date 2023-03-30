import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Select } from '../components';

export const SelectsScreen = () => {
  return (
    <View style={ styles.container }>
      <Select 
        placeholder='Gender'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  }
})