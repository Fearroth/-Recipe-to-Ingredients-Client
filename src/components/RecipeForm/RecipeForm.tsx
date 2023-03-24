import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createRecipe } from '../../services/recipeService';

interface RecipeFormProps {
    onSubmit?: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setinstructions] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createRecipe({ title, author, ingredients, instructions });
        if (onSubmit) {
            onSubmit();
        }
        navigate('/');

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
                Description:
                <textarea
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
            </label>
            <label>
                Description:
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
            </label>
            <label>
                Description:
                <textarea
                    value={instructions}
                    onChange={(e) => setinstructions(e.target.value)}
                ></textarea>
            </label>
            <button type="submit">Create Recipe</button>
            <Link to={`/`}><button>Back</button></Link>
        </form>
    );
};

export default RecipeForm;