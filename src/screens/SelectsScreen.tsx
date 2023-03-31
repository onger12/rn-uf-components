import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Select } from '../components';

export const SelectsScreen = () => {
  return (
    <View style={ styles.container }>
      <Select 
        placeholder='Gender'
      >
        <Select.Option label='Opt1' value="Opt1" />
        <Select.Option label='Opt2' value="Opt2" />
      </Select>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  }
})