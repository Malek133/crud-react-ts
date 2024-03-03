import React from 'react';
import { User } from '../types/types';
import {UserItem } from './UsererItem';

interface Props {
  users: User[];
  deleteUser: (userId: string) => void;
  updateUser: (userId: string, newData: User) => void;
}

const Users: React.FC<Props> = ({ 
  users, deleteUser, updateUser }) => {

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-3'>

       {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id.toString()}
          name={user.name}
          age={user.age}
          email={user.email}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      ))}
    </div>
  );
};

export default Users;

