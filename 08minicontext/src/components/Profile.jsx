import React, { useContext, useState } from 'react';
import UserContext from '../context/usercontext';

function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState(user ? user.username : '');
    const [password, setPassword] = useState('');

    if (!user) return <div>Please Login</div>;

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ username, password });
    };

    return (
        <div>
            <h2>Welcome {user.username}</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Profile;
