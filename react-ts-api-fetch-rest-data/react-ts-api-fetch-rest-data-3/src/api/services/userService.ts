import apiClient from "./apiClient";
import { User } from "../../types";

export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get('/users');
    return response.data;
}

export const createUser = async(user:User):Promise<User> => {
    const response = await apiClient.post('/users',user);
    return response.data;
}