import api from './api';
import { User } from '../types/User';


//TO VERIFY AFTER ADD API BACKEND ROUTES
//get 15 Users
export const getRecipes = async (): Promise<User[]> => {
    const response = await api.get('users/');
    return response.data.recipes;
};

export const getAllRecipes = async (): Promise<User[]> => {
    const response = await api.get('users/all');
    return response.data.recipes;
};

export const getRecipe = async (id: number): Promise<User> => {
    const response = await api.get(`users/${id}`);
    return response.data;
};

export const createRecipe = async (recipe: User): Promise<User> => {
    const response = await api.post('users/', recipe);
    return response.data;
};

export const updateRecipe = async (id: number, recipe: User): Promise<User> => {
    const response = await api.put(`users/${id}`, recipe);
    return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
    await api.delete(`users/${id}`);
};

export const restoreRecipe = async (id: number): Promise<User> => {
    const response = await api.put(`users/${id}/restore`);
    return response.data;
};