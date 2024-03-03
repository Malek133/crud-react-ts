export type User = {
    id: string;
    name: string;
    age: string;
    email: string;
  };
  
  export type FormProps = {
    addUser: (newPlayer: User) => void;
  };
  
  export type PlayerProps = {
    
deleteUser: (userId: string) => void;
updateUser: (userId: string, newData: User) => void;
   
  };