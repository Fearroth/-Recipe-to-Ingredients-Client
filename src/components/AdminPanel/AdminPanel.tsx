import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeListModule from '../../modules/RecipeListModule';
import { getRecipes } from '../../services/recipeService'
import { Recipe } from '../../types/Recipe';
import { User } from '../../types/User';

const AdminPanel: React.FC = () => {

    const [recipes, setReicpes] = useState<Recipe[]>([])
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchRecipesAndUsers = async () => {
            const recipesData = await getRecipes();
            const UsersData = []//await getAllUsers(); TUTAJ PLACEHOLDER
            setReicpes(recipesData)

        }

        fetchRecipesAndUsers();
    }, [])
    return (
        <div>
            <h1>Admin Panel</h1>
            <Link to='/'>Index</Link>
            <div>
                <RecipeListModule recipes={recipes} showAddNew showEdit showDelete />
            </div>

            <div>
                <h2>Users</h2>

                <Link to="/create-user">Add New User</Link>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                            <Link to={`/edit-user/${user.id}`}>Edit</Link>
                            <Link to={`/users/${user.id}/delete`}>Delete</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;

// <RecipeList recipes={recipes} showAddNew showEdit showDelete />
// <h2>Recipes</h2>
// <Link to="/create-recipe">Add New Recipe</Link>
// <ul>
//     {recipes.map((recipe) => (
//         <li key={recipe.id}>
//             <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
//             <Link to={`/recipes/edit-recipe/${recipe.id}`}>Edit</Link>
//             <Link to={`/recipes/${recipe.id}/delete`}>Delete</Link>
//         </li>
//     ))}
// </ul>