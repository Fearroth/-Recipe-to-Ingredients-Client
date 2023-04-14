import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/loginService';
import { useAuth } from '../../contexts/AuthContext';
import { useCookies } from 'react-cookie';

import './LoginPage.scss'
const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated, setIsAdmin, setUserId } = useAuth();
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await loginUser(email, password);
        console.log(response)
        if (response) {
            setIsAuthenticated(true);
            if (response.isAdmin)
                setIsAdmin(true);
            console.log(response)
            setCookie('token', response.token, { path: '/' });
            setUserId(response.userId)
            navigate('/');
        } else {

        }
    };

    return (
        <div className='login-page'>
            <div className='header'>

                <h1 className='header-title'>Login</h1>
            </div>
            <div className='body'>
                <form className='body-form' onSubmit={onSubmit}>
                    <div className='body-form-item'>
                        <label className='body-form-item-label' htmlFor="email">Email:</label>
                        <input className='body-form-item-input'
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='body-form-item'>
                        <label className='body-form-item-label' htmlFor="password">Password:</label>
                        <input className='body-form-item-input'
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button className='body-form-button' type="submit">Login</button>
                </form>
                <Link className='body-link' to="/">Back to Home</Link>
            </div >
        </div>
    );
};

export default LoginPage;
