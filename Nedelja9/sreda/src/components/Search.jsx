import React, { useState } from 'react';
import User from './User';

const Search = ({users,setUsers}) => {

    const [filter, setFilter] = useState('');

    let filtered = users.filter(user => 
        user.first_name.toLowerCase().includes(filter.toLowerCase()) || 
        user.last_name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            <input 
                placeholder="Search user" 
                onChange={(e) => setFilter(e.target.value)}
            />
            <hr></hr>
            {filtered.map(user => 
                <User 
                    user={user} 
                    key={user.id} 
                    users={users} 
                    setUsers={setUsers}/>)
            }
        </>
    )
};

export default Search;