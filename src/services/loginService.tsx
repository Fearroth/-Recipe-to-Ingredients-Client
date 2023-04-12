import api from './api';


export interface LoginResponse {
    token: string;
    userId: number;
    isAdmin: boolean;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse | null> => {
    try {
        const response = await api.post('/user-access-tokens', { email, password });
        return {
            token: response.data.userAccessToken.token,
            userId: response.data.userAccessToken.userId,
            isAdmin: response.data.userAccessToken.isAdmin,
        };
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
};
