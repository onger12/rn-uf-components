import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { ModalOptions } from './ModalOptions';

interface Props {
  placeholder : string;
  children : JSX.Element | JSX.Element[];
  pressOpacity? : number;
  iconSize? : number;
  iconRightClosed? : JSX.Element;
  iconRightOpen? : JSX.Element;
  placeholderTextColor? : string;
  placeholderTextSize? : number;
  borderWidth? : number;
  borderColor? : string;
  borderTopWidth? : number;
  borderBottomWidth? : number;
  borderLeftWidth? : number;
  borderRightWidth? : number;
  borderTopColor? : string;
  borderBottomColor? : string;
  borderLeftColor? : string;
  borderRightColor? : string;
}

export const Select = ({ pressOpacity, placeholder, children } : Props) => {

  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => setModalOptionsVisible(true) }
      activeOpacity={ pressOpacity ? pressOpacity : .8 }
    >
      <Text style={ styles.placeholder }>{ placeholder }</Text>
      <Icon name="expand-more" color="tomato" size={ widthPercentageToDP(4) } />
      <ModalOptions 
        modalVisible={ modalOptionsVisible } 
        onCloseModal={ () => setModalOptionsVisible(false) }
        options={ children }
      />
    </TouchableOpacity>
  )
}

interface OptionProps {
  label : string;
  value : string;
}

const Option = ({ label, value } : OptionProps) => {
  return(
    <TouchableOpacity 
      style={ styles.optionContainer }
      onPress={ () => {} }
      activeOpacity={ .8 }
    >
      <Text style={ styles.optText }>{ label }</Text>
    </TouchableOpacity>  
  )
}

Select.Option = Option;

const styles = StyleSheet.create({
  container : {
    width : '96%',
    backgroundColor : '#fff',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    alignSelf : 'center',
    paddingVertical : heightPercentageToDP(1.6),
    paddingHorizontal : widthPercentageToDP(2.8),
    marginVertical : heightPercentageToDP(.6),
    borderRadius : 8,
    borderWidth : 2,
    borderColor : 'tomato',
    elevation : 3,
  },
  placeholder : {
    color : '#ccc',
  },
  optionContainer : {
    backgroundColor : '#fff',
    width : widthPercentageToDP(50),
    alignSelf : 'center',
    paddingVertical : heightPercentageToDP(1.6),
    paddingHorizontal : widthPercentageToDP(2.8),
    marginVertical : heightPercentageToDP(.6),
    borderRadius : 4,
    elevation : 1,
  },
  optText : {
    textAlign : 'center',
  }
})