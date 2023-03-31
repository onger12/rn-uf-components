import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { ModalOptions } from './ModalOptions';
import { OptionType } from '../../types';

interface Props {
  placeholder : string;
  options : OptionType[];
  onChange : (value : string) => void;
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
  borderLeftColor? :    string;
  borderRightColor? :   string;
}

export const Select = ({ pressOpacity, placeholder, options, onChange } : Props) => {

  const [currentPlaceholder, setCurrentPlaceholder] = useState<string | null>(null);
  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);

  const onSelect = (opt : OptionType) => {
    console.log({opt})
    setModalOptionsVisible(false);
    setCurrentPlaceholder(opt.label);
    onChange(opt.value);
  }

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => setModalOptionsVisible(true) }
      activeOpacity={ pressOpacity ? pressOpacity : .8 }
    >
      <Text style={ currentPlaceholder ? styles.placeholderWithValue : styles.placeholder }>{ currentPlaceholder? currentPlaceholder : placeholder }</Text>
      <Icon name="expand-more" color="tomato" size={ widthPercentageToDP(4) } />
      <ModalOptions 
        modalVisible={ modalOptionsVisible } 
        onCloseModal={ () => setModalOptionsVisible(false) }
        options={ options }
        onSelect={ onSelect }
      />
    </TouchableOpacity>
  )
}

interface OptionProps {
  opt : OptionType;
  onSelect : (opt : OptionType) => void;
}

const Option = ({ opt, onSelect } : OptionProps) => {
  return(
    <TouchableOpacity 
      style={ styles.optionContainer }
      onPress={ () => onSelect(opt) }
      activeOpacity={ .8 }
    >
      <Text style={ styles.optText }>{ opt.label }</Text>
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
  placeholderWithValue : {
    color : '#333',
    fontWeight : '500',
  },
  optionContainer : {
    backgroundColor : '#fff',
    width : '100%',
    alignSelf : 'center',
    paddingVertical : heightPercentageToDP(1.6),
    paddingHorizontal : widthPercentageToDP(2.8),
    marginVertical : heightPercentageToDP(.3),
    borderRadius : 8,
    borderWidth : 2,
    borderColor : '#c5c5c5',
    // elevation : 3,
    // zIndex : 10,
  },
  optText : {
    textAlign : 'center',
  }
})