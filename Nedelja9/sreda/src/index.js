import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getFirstPage, getSecondPage } from './services';
import UserList from './components/UserList';
import Search from './components/Search';

const App = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    getFirstPage().then(
      res => setUsers(res.data.data)
    )
    getSecondPage().then(
      res => setUsers(prev => prev.concat(res.data.data))
    )
  },[setUsers]);

  return(
    <Router>
      <nav>
        <Link to="/" style={{padding:"10px"}}>USERS</Link>
        <Link to="/search" style={{padding:"10px"}}>SEARCH&DELETE</Link>
      </nav>
      <hr></hr>
      <Switch>
          <Route path="/search">
            <Search users={users} setUsers={setUsers}/>
          </Route>
          <Route path="/">
            <UserList users={users} setUsers={setUsers}/>
          </Route>
      </Switch>
    </Router>
  )
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

