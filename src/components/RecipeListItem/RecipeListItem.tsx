// src/components/RecipeItem/RecipeItem.tsx

import React from 'react';
import { Recipe } from '../../types/Recipe';
import { Link } from 'react-router-dom';

interface RecipeListItemProps {
    recipe: Recipe;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
    return (
        <li>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
    );
};

export default RecipeListItem;
