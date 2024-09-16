import React from 'react';
import { StoreState, UserTypes } from '../types';
import { create } from 'zustand';
import axios from 'axios';


export const useUserStore = create((set) => ({
    users: [],
    error: null,
    loading: false,
    fetchUsers: async () => {
        set({ loading: true });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            set({ users: data, error: null, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteUser: (id) => set((state) => ({
        users: state.users.filter(user => user.id !== id)
    }))
}));