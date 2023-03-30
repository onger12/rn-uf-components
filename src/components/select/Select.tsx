import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ModalOptions } from './ModalOptions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

interface Props {
  pressOpacity? : number;
  placeholder : string;
}

export const Select = ({ pressOpacity, placeholder } : Props) => {

  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => {} }
    >
      <Text>{ placeholder }</Text>
      {/* <ModalOptions /> */}
    </TouchableOpacity>
  )
}

const Option = () => {
  return(
    <View></View>  
  )
}

const styles = StyleSheet.create({
  container : {
    width : '100%',
    alignSelf : 'center',
    backgroundColor : '#ccc',
    paddingVertical : heightPercentageToDP(1.6),
    paddingHorizontal : widthPercentageToDP(2.8),
    marginVertical : heightPercentageToDP(.6)
  }
})