import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipes } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';

const UserPage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipes = async () => {
            if (id) {
                const data = await getRecipes();
                console.log(data)
                const userRecipes = data.filter((recipe) => recipe.author?.id === parseInt(id, 10));
                setRecipes(userRecipes);
            }
        };

        fetchRecipes();
    }, [id]);

    return (
        <div>
            <h1>User Recipes</h1>
            <Link to='/'>Index</Link>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        <Link to={`/recipes/edit-recipe/${recipe.id}`}>Edit</Link>
                        <Link to={`/recipes/${recipe.id}/delete`}>Delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;