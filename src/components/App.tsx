import React, { useState } from 'react';
import { AddUser } from './AddUser';
import Users from './Users';
import { User } from '../types/types';
import { v4 as uuid } from 'uuid';
import '../App.css'
import Button from './Btn';

const App: React.FC = () => {
  const initialData: User[] = [];

const [users, setUsers] = useState<User[]>(initialData);

  const addUser = (newUser: User) => {
    newUser.id = uuid();
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId: string) => {
    const updatedUser = users.filter(user => userId !== user.id);
    setUsers(updatedUser);  
  };

  const updateUser = (userId: string, newData: User) => {
    const updatedUser = users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          name: newData.name,
          age: newData.age,
         email: newData.email
        };
      }
      return user;
    });
    setUsers(updatedUser);
  };



  return (
    <main className='container mx-auto'>
      <div className='text-center text-3xl my-5'>

        <Button className='bg-black text-white'>
      <h1 className='font-semibold p-2'>NEW USERS</h1>
          </Button>

        </div>
      <AddUser addUser={addUser} />
      <Users 
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </main>
  );
};

export default App;


