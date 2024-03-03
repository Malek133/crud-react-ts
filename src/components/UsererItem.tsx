import React, { useState } from 'react';
import { EditUser } from './EditUser';
import { User } from '../types/types';
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import Button from './Btn';

interface PlayerItemProps {
  id: string;
  name: string;
  age: string;
  email: string;
  deleteUser: (userId: string) => void;
  updateUser: (userId: string, 
    newData: User) => void; // Ajustez le type de newData pour inclure la propriété id
}

export const UserItem: React.FC<PlayerItemProps> = ({
  id,
  name,
  age,
  email,
  deleteUser,
  updateUser
}) => {
  const [isEdit, setToggleEditing] = useState(false);

  if (isEdit) {
    return (
      <EditUser
        id={id}
        name={name}
        age={age}
        email={email}
        updateUser={updateUser}
        toggleEdit={setToggleEditing}
      />
    );
  }

  return (
   
    <div className='container border-2 border-black  
    w-fit  font-bold m-5 space-x-5 p-4'>

    <div >
      <h2 className='text-xl mt-2'>{name}</h2>
      <h4 className='text-xl mt-3 text-blue-950'>{email}</h4>
      <h6 className='text-xl mt-2 text-red-800'>{age}</h6>
      </div>
      <div className='flex justify-start space-x-2'>
        <Button className='text-blue-900'
        onClick={() => 
        setToggleEditing(!isEdit)}>
          <Pencil /></Button>
          
      <Button 
      className='text-red-600' onClick={() => 
        deleteUser(id)}><Trash2 /></Button>
      </div>
       </div>
   
  );
};
