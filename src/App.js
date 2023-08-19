import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
    const [userList, setUserList] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const addUserHandler = (uName, uAge) => {
        if (editingUser) {
            const updatedUserList = userList.map(user => {
                if (user.id === editingUser.id) {
                    return { ...user, name: uName, age: uAge };
                }
                return user;
            });
            setUserList(updatedUserList);
            setEditingUser(null);
        } else {
            setUserList((prevUserList) => {
                return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
            });
        }
    };
    const deleteUserHandler = (userId) => {
        setUserList((prevUserList) => {
            return prevUserList.filter(user => user.id !== userId);
        });
    };

    const startEditHandler = (user) => {
        startEditHandler(user);
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} editingUser={editingUser}/>
            <UserList users={userList} onDeleteUser={deleteUserHandler} onStartEditing={startEditHandler} />
        </div>
    );
}

export default App;
