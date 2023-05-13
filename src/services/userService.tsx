import api from './api';
import { User } from '../types/User';


//TO VERIFY AFTER ADD API BACKEND ROUTES
//get 15 Users
export const getUsers = async (): Promise<User[]> => {
    const response = await api.get('users/');
    return response.data.users;
};

export const getUser = async (id: number): Promise<User> => {
    const response = await api.get(`users/${id}`);
    return response.data.user;
};

export const createUser = async (recipe: User): Promise<User> => {
    const response = await api.post('users/', recipe);
    return response.data.user;
};

export const updateUser = async (id: number, recipe: User): Promise<User> => {
    const response = await api.put(`users/${id}`, recipe);
    return response.data.user;
};

export const deleteUser = async (id: number): Promise<void> => {
    await api.delete(`users/${id}`);
};

