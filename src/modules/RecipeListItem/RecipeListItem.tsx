import React from 'react';
import { Recipe } from '../../types/Recipe';
import { Link } from 'react-router-dom';

import './RecipeListItem.scss';

interface RecipeListItemProps {
    recipe: Recipe;
    showEdit?: boolean;
    showDelete?: boolean;
    userId?: number;
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({
    recipe,
    showEdit = false,
    showDelete = false,
    userId,
}) => {
    return (
        <li className='list-item' key={recipe.id}>
            <Link className='list-item-link' to={`/recipes/${recipe.id}`}>{recipe.title}</Link>

            {showEdit
                && <Link className='list-item-link-small' to={`/recipes/edit-recipe/${recipe.id}`}>Edit</Link>}

            {showDelete
                && (!userId || recipe.author?.id === userId)
                && (<Link className='list-item-link-small' to={`/recipes/${recipe.id}/delete`}>Delete</Link>
                )}
        </li>
    );
};

export default RecipeListItem;
