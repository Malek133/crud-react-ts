import { useState, ChangeEvent } from 'react';

interface FormValues {
  id: string;
  name: string;
  age: string;
  email: string;
}

type SetValueFunction<T> = (value: Partial<T> | ChangeEvent<HTMLInputElement>) => void;

type UseFormReturn<T> = [T, SetValueFunction<T>, () => void];

export const useUser = <T extends FormValues>(initialValue: T): UseFormReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange: SetValueFunction<T> = (newValue) => {
    if ('target' in newValue) {
      const { name, value } = newValue.target;
      setValue((prevValue) => ({
        ...prevValue,
        [name]: value
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        ...newValue
      }));
    }
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset];
};

