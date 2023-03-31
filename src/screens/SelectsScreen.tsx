import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Select } from '../components';
import { selectOptions } from '../data';
import { Municipio, OptionType } from '../types';
import { appConn, municipiosApiURI } from '../data/appConn';
import { useForm } from '../hooks';

export const SelectsScreen = () => {

  const [todosMunicipios, setTodosMunicipios] = useState<Municipio[]>([]);
  const [municipios, setMunicipios] = useState<OptionType[]>([]);
  const [dptos, setDptos] = useState<OptionType[]>([]);

  const { formState, onChangeForm, emptyForm } = useForm({ dpto : '', municipio : '' });

  useEffect(() => {
    appConn.get<Municipio[]>(municipiosApiURI)
      .then(({ data }) => setTodosMunicipios(data))
      .then(console.log);
  }, [])
  
  useEffect(() => {    
    const newDptos : OptionType[] = todosMunicipios.map(mp => ({ label : mp.departamento, value : mp.departamento.toUpperCase() }));
    const map = new Map();

    for (let dpto of newDptos) {
      map.set(dpto["label"], dpto);
    }
    const iteratorValues = map.values();
    const uniqueDptos = [...iteratorValues];
    setDptos(uniqueDptos.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));
  }, [todosMunicipios])


  useEffect(() => {
    const newMunp = todosMunicipios.filter(mp => mp.departamento.toUpperCase() == formState.dpto.toUpperCase());
    const newMunOpts : OptionType[] = newMunp.map(mp => ({ label : mp.municipio, value : mp.municipio.toUpperCase() }));
    setMunicipios(newMunOpts.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)));
  }, [formState.dpto])
  
  return (
    <View style={ styles.container }>
      <Select 
        placeholder='Departamento' 
        options={ dptos } 
        onChange={ (value) => onChangeForm(value, 'dpto') }
        />
      <Select 
        placeholder='Municipio' 
        options={ municipios } 
        onChange={ (value) => onChangeForm(value, 'municipio') }
        emptyString='Selecciona primero un departamento'
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