
import api from './api';
import { Recipe } from '../types/Recipe';

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get('/');
  return response.data.recipes;
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get('/all');
  return response.data.recipes;
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await api.post('/', recipe);
  return response.data;
};

export const updateRecipe = async (id: number, recipe: Recipe): Promise<Recipe> => {
  const response = await api.put(`/${id}`, recipe);
  return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  await api.delete(`/${id}`);
};

export const restoreRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.put(`/${id}/restore`);
  return response.data;
};