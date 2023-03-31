import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Select } from '../components';
import { selectOptions } from '../data';
import { Municipio, OptionType } from '../types';
import { appConn, municipiosApiURI } from '../data/appConn';
import { useForm } from '../hooks';

export const SelectsScreen = () => {

  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [dptos, setDptos] = useState<OptionType[]>([]);

  const { formState, onChangeForm, emptyForm } = useForm({ dpto : '', municipio : '' });

  useEffect(() => {
    appConn.get<Municipio[]>(municipiosApiURI)
      .then(({ data }) => setMunicipios(data))
      .then(console.log);
  }, [])
  
  useEffect(() => {
    // const newDptos : OptionType[] = [];
    
    const newDptos : OptionType[] = municipios.map(mp => ({ label : mp.departamento, value : mp.departamento.toUpperCase() }));
    const map = new Map();

    for (let dpto of newDptos) {
      map.set(dpto["label"], dpto);
    }
    const iteratorValues = map.values();
    const uniqueDptos = [...iteratorValues];
    setDptos(uniqueDptos.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));
  }, [municipios])


  useEffect(() => {
    const newMunp = municipios.filter(mp => mp.departamento == formState.dpto);
    setMunicipios(newMunp);
  }, [formState.dpto])
  
  

  console.log({ formState : JSON.stringify(formState, null, 3)});

  return (
    <View style={ styles.container }>
      <Select 
        placeholder='Departamento' 
        options={ dptos } 
        onChange={ (value) => onChangeForm(value, 'dpto') }
        />
      <Select 
        placeholder='Municipio' 
        options={ selectOptions } 
        onChange={ (value) => onChangeForm(value, 'municipio') }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  }
})