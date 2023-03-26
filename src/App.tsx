import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeForm from './components/RecipeForm/RecipeForm';
import EditRecipe from './components/EditRecipe/EditRecipe';
import DeleteRecipe from './components/DeleteRecipe/DeleteRecipe';
import AdminPanel from './components/AdminPanel/AdminPanel';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/create-recipe" element={<RecipeForm />} />
        <Route path="/recipes/edit-recipe/:id" element={<EditRecipe />} />
        <Route path="/recipes/:id/delete" element={<DeleteRecipe />} />

        <Route path="/admin" element={<AdminPanel />}></Route>
      </Routes>
    </Router>
  );
};

export default App;