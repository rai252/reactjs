import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch user data
        fetch('https://api.github.com/users/rai252')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching user data:', error));

        // Fetch user's repositories
        fetch('https://api.github.com/users/rai252/repos')
            .then(response => response.json())
            .then(repos => {
                setRepos(repos);
            })
            .catch(error => console.error('Error fetching repositories:', error));
    }, []);

    return (
        <div className='text-center m-4 text-black p-4 text-3xl'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={data.avatar_url} alt="GitHub profile picture" width={300} />
                <h2>GitHub Username: {data.login}</h2>
                <p>Followers: {data.followers}</p>
                <p>Public Repositories: {data.public_repos}</p>
            </div>

            <h3 className='mt-4 text-2xl'>Repositories:</h3>
            <ul className='text-lg'>
                {repos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Github;
