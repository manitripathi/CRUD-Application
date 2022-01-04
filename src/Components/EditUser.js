import React, { useState,useEffect, useCallback } from 'react';
import { FormGroup, FormControl, InputLabel ,Input,Button,makeStyles} from '@material-ui/core';
import {editUser} from './Service/Api';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getUsers } from './Service/Api';

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *':{
            marginTop:'20px',
        }
    }
})

const initialValue={
    name:"",
    username:"",
    email:"",
    phone:"",
}

const EditUser = () => {

    const[user,setUser]=useState(initialValue);
    const {name, username, email, phone}=user;
    const {id}= useParams();
    console.log(id)

   

    const loadUserData = useCallback(async ()=>{
       const response = await getUsers(id);
       setUser(response.data);
    },[id]);

     useEffect(()=>{
        loadUserData();
    },[loadUserData]);

    const history= useHistory();

    const onValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails= async ()=>{
        await editUser(id, user);
        history.push('../AllUsers');
    }


    const classes=useStyle();

    return (
        <FormGroup className={classes.container}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={onValueChange} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={onValueChange} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValueChange} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={onValueChange} name='phone' value={phone}/>
            </FormControl>
            <Button variant='contained' color='primary' onClick={editUserDetails}>Edit User</Button>
        </FormGroup>
    );
};

export default EditUser;