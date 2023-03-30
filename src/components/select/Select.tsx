import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ModalOptions from './ModalOptions'

export const Select = () => {

  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);

  return (
    <View>
      <Text>Select</Text>
      <ModalOptions />
    </View>
  )
}

const styles = StyleSheet.create({})