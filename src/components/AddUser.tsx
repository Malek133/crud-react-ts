import React, { useState, 
  ChangeEvent, FormEvent } from 'react';
import { FormProps } from '../types/types';
import { User } from '../types/types';
import Button from './Btn';
import { FilePlus2 } from 'lucide-react';

export const AddUser: React.FC<FormProps> = ({ 
  addUser }) => {
  const initialValue: User = {
    id: '',
    name: '',
    age: '',
    email: ''
  };

  const [user, setUser] = useState<User>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, 
      [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser(user);
    setUser(initialValue);
  };

  return (
    <>
      <form className='flex justify-center 
      items-center space-x-3'
      onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter player name"
          onChange={handleChange}
          value={user.name}
        />

         <input
          type="email" 
          name="email"
          placeholder="Enter your Email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={handleChange}
          value={user.age.toString()}
        />
       
        <Button className='text-black' 
        type="submit">
         Add <FilePlus2 /> 
        </Button> 
      </form>
    </>
  );
};
