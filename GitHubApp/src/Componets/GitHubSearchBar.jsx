import React, { useEffect, useState } from 'react';
import './Git.css'

const GitHubSearchBar = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState([]);
    const [searchClicked, setSearchClicked] = useState();

    useEffect(() => {
        const fetchData = async () => {
            
                const token = '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';
                const api = `https://api.github.com/users/${searchClicked}`;
                const response = await fetch(api, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
                const userData = await response.json();
                setUserData(userData);
           
            
        };

        fetchData();
    }, [searchClicked]);

    function onChangeHandler(e) {
        setUsername(e.target.value);
    }
    const handleSearchClick=()=>{
        setSearchClicked(username)
    }

   
    

    return (
        <div className='main'>
        <h1>GitHub accounts</h1>
        <div className='searchbar'>
            
            <input
                type="text"
                onChange={onChangeHandler}
                value={username}
                placeholder="Enter username"
            />
             <button onClick={handleSearchClick}>Search</button>
            </div>
        
                <div className='profile'>
                    <p>User: {userData.login}</p>
                    <p>Name: {userData.name}</p>
                    <img id='img1' src={userData.avatar_url} alt="User Avatar" />
                </div>
            
        </div>
    );
};

export default GitHubSearchBar;


