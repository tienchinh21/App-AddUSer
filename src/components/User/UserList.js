import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
    const deleteUserHandler = (userId) => {
        props.onDeleteUser(userId);
    };
    const startEditHandler = (user) => {
        props.onStartEditing(user);
    };

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                        <div>
                            <button onClick={() => deleteUserHandler(user.id)}>delete</button>
                            <button onClick={() => startEditHandler(user)}>edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
