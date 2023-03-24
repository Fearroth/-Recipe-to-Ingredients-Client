// src/components/EditRecipe/EditRecipe.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Recipe } from '../../types/Recipe';
import { getRecipe, updateRecipe } from '../../services/recipeService';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';

const EditRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                const recipe = await getRecipe(parseInt(id, 10));
                setTitle(recipe.title);
                setAuthor(recipe.author);
                setIngredients(recipe.ingredients);
                setInstructions(recipe.instructions);
            }
        };

        fetchRecipe();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            await updateRecipe(parseInt(id, 10), { title, author, ingredients, instructions });
            navigate('/');
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Author:
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </label>
            <label>
                Ingredients:
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
            </label>
            <label>
                Instructions:
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
            </label>
            <button type="submit">Update Recipe</button>
            <br />
            <br />
            <Link to={`/`}><button>Index</button></Link>
            <Link to={`/recipes/${id}`}><button>Back</button></Link>
            <Link to={`/recipes/${id}/delete`}><button>DELETE</button></Link>
        </form>
    );
};

export default EditRecipe;
