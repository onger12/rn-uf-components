import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { HomeAnchorType } from '../types';

type Props = {
  homeAnchor : HomeAnchorType;
  onNavigate : (targetRouteName : string) => void;
}

export const HomeAnchor = ({ homeAnchor, onNavigate } : Props) => {

  const iconSize = useRef(7.2).current

  return (
    <TouchableOpacity 
      style={ styles.container }
      onPress={ () => onNavigate(homeAnchor.targetRouteName) }
    >
      <View style={ styles.row }>
        <Icon name={ homeAnchor.iconName } size={ widthPercentageToDP(iconSize) } color="tomato" />
        <Text style={ styles.label }>{ homeAnchor.label }</Text>
      </View>
      <Icon name="chevron-right" color="tomato" size={ widthPercentageToDP(iconSize) } />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    width : '92%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    alignSelf : 'center',
    elevation : 3,
    backgroundColor : '#fbfbfb',
    borderRadius : 8,
    marginVertical : heightPercentageToDP(.6),
    paddingVertical : heightPercentageToDP(1),
    paddingHorizontal : widthPercentageToDP(2),
  },
  row : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  label : {
    fontSize : widthPercentageToDP(4.4),
    color : '#333',
    marginLeft : widthPercentageToDP(4),
  }
})