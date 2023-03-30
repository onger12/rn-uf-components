import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { HomeAnchor } from '../components';
import { homeAnchors } from '../data';
import { AppStackScreenTypes } from '../navigation';

interface Props extends StackScreenProps<AppStackScreenTypes, 'HomeScreen'>{}

export const HomeScreen = ({ navigation } : Props) => {

  const onNavigate = (targetRouteName : string) => {
    navigation.navigate(targetRouteName);
  }

  return (
    <ScrollView
      contentContainerStyle={ styles.container }
    >
      {
        homeAnchors.map(ha => <HomeAnchor key={ ha.targetRouteName } homeAnchor={ ha } onNavigate={ onNavigate } />)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  }
})