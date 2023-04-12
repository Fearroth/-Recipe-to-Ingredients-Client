// src/components/RecipeList/RecipeList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types/Recipe';

interface RecipeListProps {
    recipes: Recipe[];
    showAddNew?: boolean;
    showEdit?: boolean;
    showDelete?: boolean;
    userId?: number;
}

const RecipeList: React.FC<RecipeListProps> = ({
    recipes,
    showAddNew = false,
    showEdit = false,
    showDelete = false,
    userId,
}) => {
    return (
        <div>
            <h2>Recipes</h2>
            {showAddNew && <Link to="/create-recipe">Add New Recipe</Link>}
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        {showEdit && <Link to={`/recipes/edit-recipe/${recipe.id}`}>Edit</Link>}
                        {showDelete && (!userId || recipe.author?.id === userId) && (
                            <Link to={`/recipes/${recipe.id}/delete`}>Delete</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
