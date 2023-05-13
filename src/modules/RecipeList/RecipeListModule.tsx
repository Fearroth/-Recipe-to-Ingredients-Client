// src/components/RecipeList/RecipeList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../types/Recipe';
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import './RecipeListModule.scss'
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
        <div className="modules-recipe-list">
            <div className="header">
                <h2 className='header-tittle'>Recipes</h2>
                {showAddNew && <Link className='header-link' to="/create-recipe">Add New Recipe</Link>}
            </div>
            <div className='body'>
                <ul className='list'>
                    {recipes.map((recipe) => (
                        <RecipeListItem
                            key={recipe.id}
                            recipe={recipe}
                            showEdit={showEdit}
                            showDelete={showDelete}
                            userId={userId} />

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeList;
