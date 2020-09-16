import React from 'react';

const User = ({user,users,setUsers}) => {

    const handleDelete = () => {
        let tmp = [...users]
        tmp.splice(users.findIndex(el => el.first_name === user.first_name),1)
        setUsers(tmp)
    };

    return(
        <>
            <p>{user.first_name} {user.last_name}</p>
            <button onClick={handleDelete}>X</button> 
        </>
    )
};

export default User;