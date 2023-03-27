

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../../../services/recipeService';
import { Recipe } from '../../../../types/Recipe';
import RecipeListItem from '../../../RecipeListItem/RecipeListItem';

const ModulesRecipesList: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getAllRecipes();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    return (
        <div className='modules-recipes-list'>
            <div className='header'>
                <Link
                    className='header-link'
                    to={`recipes/create-recipe/`}
                >
                    Dodaj przepis
                </Link>
                <h1 className='heder-title'>
                    Recipes
                </h1>
            </div>
            <div className='body'>
                <ul className='list'>
                    {recipes.map((recipe) => (
                        <RecipeListItem
                            key={recipe.id}
                            recipe={recipe}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ModulesRecipesList;
