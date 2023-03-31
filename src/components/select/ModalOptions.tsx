import React from 'react';
import { StyleSheet, Text } from 'react-native';

import CustomModal from '../CustomModal'
import { OptionType } from '../../types';
import { Select } from './Select';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

interface Props {
  modalVisible : boolean;
  onCloseModal : () => void;
  options : OptionType[];
  onSelect : (opt : OptionType) => void;
  emptyString? : string;
}

export const ModalOptions = ({ modalVisible, emptyString, onCloseModal, options, onSelect } : Props) => {
  
  return (
    <CustomModal 
      visible={ modalVisible }
      closeModal={ onCloseModal }
      size='xl'
      >
      <CustomModal.Content style={ styles.modalContent }>
        { options.length !== 0 ? options.map(opt => <Select.Option key={ opt.value } opt={ opt } onSelect={ onSelect } /> ) : <Text>{ emptyString ? emptyString : "Empty data here" }</Text>}
      </CustomModal.Content>
    </CustomModal>
      
  )
}

const styles = StyleSheet.create({
  modalContent : {
    paddingVertical : widthPercentageToDP(1.2),
    paddingHorizontal : widthPercentageToDP(1.2),
  }
})