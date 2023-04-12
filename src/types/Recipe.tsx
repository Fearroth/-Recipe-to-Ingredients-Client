import { User } from "./User";
// export interface Recipe {
//     id?: number;
//     title: string;
//     author: string;
//     ingredients: string;
//     instructions: string;
// }

//in user
// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     isAdmin: boolean;
// }
export interface ProductQuantityUnit {
    quantity?: string;
    unit?: string;
}

export interface Product {
    id?: number;
    name: string;
    products?: ProductQuantityUnit;
}


export interface Recipe {
    id: string;
    title: string;
    author: User | null;
    instructions: string;
    products: Product[];
}

export interface updateRecipeType {
    id?: string;
    title: string;
    authorId: number | null;
    instructions: string;
    products: Product[];
}

export interface createRecipeType {

    title: string;
    authorId: number | null;
    instructions: string;
    products: Product[];
}

export interface RecipeApiResponse {
    id: number;
    title: string;
    author: User | null;
    instructions: string;
    products: Product[];
}