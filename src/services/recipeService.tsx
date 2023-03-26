
import api from './api';
import { Recipe } from '../types/Recipe';

//get 15 recipes
export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get('/recipes/');
  return response.data.recipes;
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await api.get('/recipes/all');
  return response.data.recipes;
};

export const getRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await api.post('/recipes/', recipe);
  return response.data;
};

export const updateRecipe = async (id: number, recipe: Recipe): Promise<Recipe> => {
  const response = await api.put(`/recipes/${id}`, recipe);
  return response.data;
};

export const deleteRecipe = async (id: number): Promise<void> => {
  await api.delete(`/recipes/${id}`);
};

export const restoreRecipe = async (id: number): Promise<Recipe> => {
  const response = await api.put(`/recipes/${id}/restore`);
  return response.data;
};


