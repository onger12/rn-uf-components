import { useState } from 'react';

export const useForm = (initialState : any) => {
  const [formState, setFormState] = useState(initialState);

  const onChangeForm = (text : string, nativeID : string) => {
    setFormState({
      ...formState,
      [nativeID] : text,
    });
  }

  const resetFormState = () => {
    setFormState(initialState);
  }

  const emptyForm = () => {
    let response = false;
    for (const key in formState) {
      if(formState[key].length === 0) {
        response = true;
        break;
      }
    }
    return response;
  }

  return({
    formState,
    ...formState,
    onChangeForm,
    emptyForm,
    resetFormState,
  })
}