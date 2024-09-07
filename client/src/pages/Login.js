import React, { useState } from 'react';

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
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUserData(data);
            console.log('Success:', data);
            console.log(userData)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
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