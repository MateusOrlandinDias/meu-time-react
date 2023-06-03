import './styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [apiKey, setApiKey] = useState('');
    
    const navigate = useNavigate();

    return(
        <div className='login-container'>
            
        </div>
    );
    
}