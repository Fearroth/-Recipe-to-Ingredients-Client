import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './contexts/AuthContext';

import AdminPanel from './components/AdminPanel/AdminPanel';

import AdminPrivateRoute from './components/PrivateRoute/AdminPrivateRoute';
import './App.scss';

import UserPage from './components/UserPage/UserPage';

import DeleteRecipe from './components/DeleteRecipe/DeleteRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';
import HeroPage from './components/HeroPage/HeroPage';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeForm from './components/RecipeForm/RecipeForm';

import ErrorPage from './components/ErrorPage/ErrorPage';
import LoginPage from './components/LoginPage/LoginPage';


const App: React.FC = () => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HeroPage />} />

            {/* private route for authenticated users? */}
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/create-recipe" element={<RecipeForm />} />
            <Route path="/recipes/edit-recipe/:id" element={<EditRecipe />} />
            <Route path="/recipes/:id/delete" element={<DeleteRecipe />} />
            <Route path="/user/:id" element={<UserPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/admin" element={<AdminPrivateRoute />}>
              <Route path="" element={<AdminPanel />} />
            </Route>
            <Route path="/access-denied" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default App;