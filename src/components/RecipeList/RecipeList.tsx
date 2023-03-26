import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import { useAuth } from '../../contexts/AuthContext';

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { isAuthenticated, isAdmin, setIsAuthenticated, setIsAdmin } = useAuth();

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getAllRecipes();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    const loginAs = (user: 'admin' | 'user' | 'out') => {
        switch (user) {
            case 'admin':
                setIsAuthenticated(true);
                setIsAdmin(true);
                break;
            case 'user':
                setIsAuthenticated(true);
                setIsAdmin(false);
                break;
            case 'out':
                setIsAuthenticated(false);
                setIsAdmin(false);
                break;
            default:
                return;
        }
    };

    return (
        <div>
            <div>
                <button onClick={() => loginAs('admin')}>Login as Admin</button>
                <button onClick={() => loginAs('user')}>Login as User</button>
                <button onClick={() => loginAs('out')}>Logout</button>
                {isAuthenticated && isAdmin && (
                    <Link to="/admin">
                        <button>Go to Admin Panel</button>
                    </Link>
                )}
            </div>
            <p>{`Logged in: ${isAuthenticated.toString()}`}</p>
            <p>{`Admin: ${isAdmin.toString()}`}</p>
            <h1>Recipes</h1>
            <Link to={`recipes/create-recipe/`}>Add New Recipe</Link>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeListItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
