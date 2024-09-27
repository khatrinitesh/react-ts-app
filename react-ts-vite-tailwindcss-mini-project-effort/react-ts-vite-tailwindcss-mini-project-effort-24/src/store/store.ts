import { create } from "zustand";
import { User } from "../interface/User";

interface State {
    users: User[];
    addUser: (user: User) => void;
    removeUser: (id: number) => void;
  }

  const UseStore = create<State>((set) => ({
    users:[],
    addUser:(user:User) => set((state) => ({users:[...state.users,user]})),
    removeUser:(id:number) => set((state) => ({
        users:state.users.filter(user => user.id !== id),
    })),
  }))

