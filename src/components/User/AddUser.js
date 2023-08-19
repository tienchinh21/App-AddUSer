import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.modules.css'

const AddUser = (props) => {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');

    useEffect(() => {
        if (props.editingUser) {
            setEnterUsername(props.editingUser.name);
            setEnterAge(props.editingUser.age);
        }
    }, [props.editingUser]);

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            return;
        }
        if (+enterAge < 1) {
            return;
        }
        props.onAddUser(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    };

    const userNameChangerHandler = (e) => {
        setEnterUsername(e.target.value);
    };

    const ageChangerHandler = (e) => {
        setEnterAge(e.target.value);
    };

    return (
        <Card className = {classes.input}>
            <form action="" onSubmit={addUserHandler}>
                <label htmlFor="username">user name</label>
                <input type="text" name="" id="username" value={enterUsername} onChange={userNameChangerHandler} />
                <label htmlFor="age">age</label>
                <input type="number" name="" id="age" value={enterAge} onChange={ageChangerHandler} />
                <Button type="submit">{props.editingUser ? 'Edit user' : 'Add user'}</Button>
            </form>
        </Card>
    )
};

export default AddUser;
