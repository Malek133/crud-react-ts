import React from 'react';
import { useUser } from '../hooks/useUser';
import { User } from '../types/types';
import { HardDriveDownload } from 'lucide-react';
import Button from './Btn';

interface EditUserFormProps {
  id: string;
  name: string;
  age: string;
  email: string;
  updateUser: (id: string, newData: User) => void;
  toggleEdit: (toggle: boolean) => void;
}

export const EditUser: 
React.FC<EditUserFormProps> = ({
  id,
  name,
  age,
  email,
  updateUser,
  toggleEdit
}) => {
  interface FormValues extends User {} 

  const initialValues: FormValues = { id, 
    name, age, email };
  const [user, handleChange] = useUser(initialValues);

  const handleSubmit = (e: 
    React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(id, user);
    toggleEdit(false);
  };

  return (
    <>
      <form className='flex-block items-center p-3  
      justify-center space-x-3 border-2 border-black' 
      onSubmit={handleSubmit}>
        <input
         className='ml-3'
          type="text"
          placeholder="Edit,your name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Edit your age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Edit your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <div className='ml-3'>
          <Button className='text-blue-900'
         type="submit">
          <HardDriveDownload />
        </Button>
        </div>
        
      </form>
    </>
  );
};

