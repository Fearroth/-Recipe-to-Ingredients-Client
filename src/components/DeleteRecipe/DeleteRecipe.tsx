

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteRecipe } from '../../services/recipeService';

interface RouteParams {
    id: string;
}

const DeleteRecipe: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (id) {
            await deleteRecipe(parseInt(id, 10));
            navigate('/');
        }
    };

    return (
        <div>
            <h1>Are you sure you want to delete this recipe?</h1>
            <button onClick={handleDelete}>Yes, delete</button>
            <button onClick={() => navigate(`recipes/edit-recipe/${id}`)}>No, go back</button>
        </div>
    );
};

export default DeleteRecipe;
