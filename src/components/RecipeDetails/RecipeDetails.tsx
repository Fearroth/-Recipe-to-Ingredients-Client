

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';


const RecipeDetails: React.FC = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                const data = await getRecipe(parseInt(id, 10));
                setRecipe(data);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.author}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>

        </div>
    );
};

export default RecipeDetails;
