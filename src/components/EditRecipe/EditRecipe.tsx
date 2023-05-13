// src/components/EditRecipe/EditRecipe.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Recipe, Product, ProductQuantityUnit, updateRecipeType } from '../../types/Recipe';
import { getRecipe, updateRecipe } from '../../services/recipeService';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';
import { useAuth } from '../../contexts/AuthContext';

const EditRecipe: React.FC = () => {
    const [recipeId, setRecipeId] = useState<string>('');
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState<number | null>(null);
    const [authorName, setAuthorName] = useState<string>('');
    const [instructions, setInstructions] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const { id } = useParams();
    const navigate = useNavigate();
    const { userId } = useAuth();



    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                const recipe = await getRecipe(parseInt(id, 10));
                console.log(recipe)
                setRecipeId(recipe.id);
                setTitle(recipe.title);
                setAuthorId(recipe.author?.id || null);
                setAuthorName(recipe.author?.name || '');
                setInstructions(recipe.instructions);
                setProducts(recipe.products)
            }
        };

        fetchRecipe();
    }, [id]);

    const handleProductChange = (index: number, field: keyof Product | keyof ProductQuantityUnit, value: any) => {
        const updatedProducts = [...products];
        if (field === 'quantity' || field === 'unit') {
            updatedProducts[index] = { ...updatedProducts[index], products: { ...updatedProducts[index].products, [field]: value } };
        } else {
            updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        }
        setProducts(updatedProducts);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            const updatedRecipe: updateRecipeType = { id, title, authorId, products, instructions };
            await updateRecipe(parseInt(id, 10), updatedRecipe);
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
                <p>{authorName}</p>
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
                    <label>
                        Quantity:
                        <input
                            type="text"
                            value={product.products?.quantity}
                            onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                        />
                    </label>
                    <label>
                        Unit:
                        <input
                            type="text"
                            value={product.products?.unit}
                            onChange={(e) => handleProductChange(index, 'unit', e.target.value)}
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
