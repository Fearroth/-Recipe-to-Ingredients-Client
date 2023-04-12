import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeForm from './components/RecipeForm/RecipeForm';
import EditRecipe from './components/EditRecipe/EditRecipe';
import DeleteRecipe from './components/DeleteRecipe/DeleteRecipe';

import AdminPanel from './components/AdminPanel/AdminPanel';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.scss';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LoginPage from './components/LoginPage/LoginPage';
import { CookiesProvider } from 'react-cookie';
import UserPage from './components/UserPage/UserPage';
const App: React.FC = () => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/create-recipe" element={<RecipeForm />} />
            <Route path="/recipes/edit-recipe/:id" element={<EditRecipe />} />
            <Route path="/recipes/:id/delete" element={<DeleteRecipe />} />

            <Route path="/admin" element={<PrivateRoute />}>
              <Route path="" element={<AdminPanel />} />
            </Route>
            <Route path="/access-denied" element={<ErrorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default App;