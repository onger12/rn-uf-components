import { useState, useEffect } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

type ModalSize = 's' | 'l' | 'm' | 'xl' | 'xxl';


interface Props {
  visible : boolean;
  closeModal : () => void;
  children? : JSX.Element | JSX.Element[];
  onPressBackdrop? : () => void;
  size? : ModalSize;
}

interface HeaderProps {
  children? : JSX.Element | JSX.Element[];
  Title? : TitleProps;
}
interface ContentProps {
  children? : JSX.Element | JSX.Element[];
}
interface FooterProps {
  children? : JSX.Element | JSX.Element[];
}

const CustomModal = ({ children, size, visible, onPressBackdrop, closeModal } : Props) => {

  const [WIDTH, setWIDTH] = useState(widthPercentageToDP(55));

  useEffect(() => {
    if(size === 's') {
      setWIDTH(widthPercentageToDP(30));
    }else if(size === 'm') {
      setWIDTH(widthPercentageToDP(55));
    }else if(size === 'l') {
      setWIDTH(widthPercentageToDP(70));
    }else if(size === 'xl') {
      setWIDTH(widthPercentageToDP(85));
    }else {
      setWIDTH(widthPercentageToDP(65));
    }
  }, [size])
  

  return (
    <Modal
      visible={ visible }
      transparent
    >
      <TouchableOpacity 
        style={ styles.modalContainer }
        onPress={ () => {
          closeModal();
          onPressBackdrop && onPressBackdrop();
        }}
      >
        <TouchableOpacity
          activeOpacity={ 1 }
        >
          <View 
            style={[ styles.modalInternalContainer, { width : WIDTH } ]}
          >{ children }</View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  )
}

const Header = ({ children } : HeaderProps) => {
  return (
    <View style={ styles.headerContainer }>
      { children }
    </View>
  )
}
const Content = ({ children } : ContentProps) => {
  return (
    <View style={ styles.contentContainer }>
      { children }
    </View>
  )
}
const Footer = ({ children } : FooterProps) => {
  return (
    <View style={ styles.footerContainer }>
      { children }
    </View>
  )
}

interface TitleProps {
  children : string;
}

CustomModal.Header = Header;
CustomModal.Content = Content;
CustomModal.Footer = Footer;


export default CustomModal;

const styles = StyleSheet.create({
  modalContainer : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'rgba(0, 0, 0, 0.2)',
  },
  modalInternalContainer : {
    borderRadius : 12,
    backgroundColor : '#fff',
  },
  headerContainer : {
    borderWidth : 1,
    borderColor : '#ccc',
    paddingVertical : 16,
    paddingHorizontal : 20,
  },
  contentContainer : {
    paddingVertical : 24,
    paddingHorizontal : 30,
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderLeftColor : '#ccc',
    borderRightColor  : '#ccc',
    alignItems : 'center',
  },
  footerContainer : {
    borderWidth : 1,
    borderColor : '#ccc',
    paddingVertical : 16,
    paddingHorizontal : 20,
  }
})