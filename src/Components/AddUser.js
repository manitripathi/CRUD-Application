import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel ,Input,Button,makeStyles} from '@material-ui/core';
import {addUser} from './Service/Api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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

const AddUser = () => {

    const[user,setUser]=useState(initialValue);
    const {name, username, email, phone}=user;

    const history= useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails= async ()=>{
        await addUser(user);
        history.push('./AllUsers');
    }


    const classes=useStyle();

    return (
        
        <FormGroup className={classes.container}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={onValueChange} name='name'  value={name}/>
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
            <Button variant='contained' color='primary' onClick={addUserDetails}>Add User</Button>
        </FormGroup>
    );
};

export default AddUser;