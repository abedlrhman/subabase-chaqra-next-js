/*
@use: 
  const [values, handleChange, resetFormFields] = useFormField<T>(initialValue)
*/

import { ChangeEvent, useState } from "react";

export function useFormFields<T>(
  initialValue: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [values, setValues] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const resetFormFields = () => setValues(initialValue)

  return [values, handleChange, resetFormFields ]
  
}
