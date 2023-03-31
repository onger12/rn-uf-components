import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import CustomModal from '../CustomModal'

interface Props {
  modalVisible : boolean;
  onCloseModal : () => void;
  options :  JSX.Element | JSX.Element[];
}

export const ModalOptions = ({ modalVisible, onCloseModal, options } : Props) => {
  
  return (
    <CustomModal 
      visible={ modalVisible }
      closeModal={ onCloseModal }
    >
      <CustomModal.Content>
        { options }
      </CustomModal.Content>
    </CustomModal>
      
  )
}

const styles = StyleSheet.create({})