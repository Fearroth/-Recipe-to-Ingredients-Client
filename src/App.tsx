import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RecipeForm from './components/RecipeForm/RecipeForm';
import EditRecipe from './components/EditRecipe/EditRecipe';
import DeleteRecipe from './components/DeleteRecipe/DeleteRecipe';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/create-recipe" element={<RecipeForm />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe></EditRecipe>} />
        <Route path="/recipes/:id/delete" element={<DeleteRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;