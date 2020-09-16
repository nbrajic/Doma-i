import React from 'react';

const UserList = ({users}) => {

      return (
          <>
          {users.map(user => <p key={user.id}>{user.first_name} {user.last_name}</p>)}
          </>
      )

};

export default UserList;