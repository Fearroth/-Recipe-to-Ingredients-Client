import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipesFront } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import { useAuth } from '../../contexts/AuthContext';
import RecipeListModule from '../../modules/RecipeListModule';

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const { userId, isAuthenticated, isAdmin, setIsAuthenticated, setIsAdmin, logout } = useAuth();

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipesFront();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    //filler
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
    const handleLogout = async () => {
        await logout();
    };
    return (
        <div>
            <div>
                <button onClick={() => loginAs('admin')}>Login as Admin</button>
                <button onClick={() => loginAs('user')}>Login as User</button>
                <button onClick={() => handleLogout()}>Logout</button>
                {isAuthenticated && isAdmin && (
                    <Link to="/admin">
                        <button>Go to Admin Panel</button>
                    </Link>
                )}
                {isAuthenticated && (
                    <Link to={`/user/${userId}`}>
                        <button>User Page</button>
                    </Link>
                )}
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <p>{`Logged in: ${isAuthenticated.toString()}`}</p>
            <p>{`Admin: ${isAdmin.toString()}`}</p>

            <RecipeListModule recipes={recipes} />
        </div >
    );
};

export default RecipeList;

//old recipelist
{/* <h1>Recipes</h1>
            <Link to={`recipes/create-recipe/`}>Add New Recipe</Link>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeListItem key={recipe.id} recipe={recipe} />
                ))}
            </ul> */}