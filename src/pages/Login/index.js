import './styles.css';
import logo from '../../assets/Meu-time-logo.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
const axios = require('axios');

export default function Login() {
    const [apiKey, setApiKey] = useState('');

    const navigate = useNavigate();

    async function LoginApiFootball(event) {
        event.preventDefault();

        try {
            const response = await api.get('countries');
            localStorage.setItem('apiKey', apiKey);
        } catch (error) {
            alert('Erro ao autenticar API Key: ' + error);
        }
    }

    return (
        <div className='login-container'>
            <img alt='Logo' src={logo} />
            <form onSubmit={LoginApiFootball}>
                <h1>Token de acesso API-Football</h1>
                <input
                    placeholder='API Key'
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                />
                <button className='button' type="submit">Login</button>
            </form>
        </div>
    );

}