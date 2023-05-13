import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createRecipe } from '../../services/recipeService';
import { Recipe, Product, createRecipeType } from '../../types/Recipe';

interface RecipeFormProps {
    onSubmit?: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState<number | null>(null);
    const [instructions, setInstructions] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();


    const handleProductChange = (index: number, field: keyof Product, value: any) => {
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        setProducts(updatedProducts);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newRecipe: createRecipeType = { title, authorId, products, instructions };
        await createRecipe(newRecipe);

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
                Author:
                <input
                    type="number"
                    value={authorId || ''}
                    onChange={(e) => setAuthorId(e.target.value ? parseInt(e.target.value, 10) : null)}
                ></input>
            </label>
            {products.map((product, index) => (
                <div key={index}>
                    <label>
                        Product Name:
                        <input
                            type="text"
                            value={product.name}
                            onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                        />
                    </label>
                </div>
            ))}
            <label>
                Instructions:
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
            </label>
            <button type="submit">Create Recipe</button>
            <Link to={`/`}><button>Back</button></Link>
        </form>
    );
};

export default RecipeForm;