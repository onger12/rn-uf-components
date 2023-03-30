import { useState, useEffect } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

type ModalSize = 's' | 'l' | 'm' | 'xl' | 'xxl';


interface Props {
  children? : JSX.Element | JSX.Element[];
  visible : boolean;
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

const CustomModal = ({ children, size, visible, onPressBackdrop } : Props) => {

  const [WIDTH, setWIDTH] = useState('55%');

  useEffect(() => {
    if(size === 's') {
      setWIDTH('30%');
    }else if(size === 'm') {
      setWIDTH('55%');
    }else if(size === 'l') {
      setWIDTH('70%');
    }else if(size === 'xl') {
      setWIDTH('85%');
    }else {
      setWIDTH('100%');
    }
  }, [size])
  

  return (
    <Modal
      visible={ visible }
      transparent
    >
      <TouchableOpacity 
        style={ styles.modalContainer }
        onPress={ onPressBackdrop }
      >
        <TouchableOpacity
          activeOpacity={ 1 }
        >
          <View 
            style={[ styles.modalInternalContainer, { width : '100%' } ]}
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
    width : '100%',
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
  },
  footerContainer : {
    borderWidth : 1,
    borderColor : '#ccc',
    paddingVertical : 16,
    paddingHorizontal : 20,
  }
})