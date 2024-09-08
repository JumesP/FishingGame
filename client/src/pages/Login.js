import React, { useState } from 'react';
import Cookies from 'js-cookie';
import sendCookieDataToBackend from "../utils/sendCookieDataToBackend";
import LoginForm from '../components/atoms/login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(username, password);

        try {
            console.log('sending request');
            const response = await fetch('http://localhost:5001/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                // Save user data to cookies
                Cookies.set('UserID', JSON.stringify(data[0].UserID), { expires: 7 }); // Expires in 7 days
                console.log('User logged in and saved to cookies:', data);
                console.log('Success:', data);
                console.log(userData)
                // Send Cookies to Backend
                sendCookieDataToBackend();
            } else {
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
            {userData && userData.length > 0 ? (
                <div>
                    <h2>User Data</h2>
                    <p>Username: {userData[0].Username}</p>
                    <p>Password: {userData[0].Password}</p>
                    <p>UserID: {userData[0].UserID}</p>
                </div>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
};

export default Login;