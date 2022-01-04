import { makeStyles, Table, TableBody, TableCell, TableRow,Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser} from './Service/Api';
import { Link } from 'react-router-dom';

const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0px 0px 50px' 
    },
    thead:{
        '& > *' :{
            background:'purple',
            color:'white',
            fontSize:'30'
        }
    }
})

const AllUsers = () => {

    const [users,setUsers]=useState([]);
    const classes=useStyle();

    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers= async ()=>{
       const response=await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <>
            <Button variant='contained' style={{backgroundColor:'purple', color:'white', marginTop:'20px'}} component={Link} to={'/AddUser'}>ADD USERS</Button>
        <Table className={classes.table}>
            <TableRow className={classes.thead}>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Username</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell>
               <TableCell></TableCell>
            </TableRow>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' color='primary' style={{marginRight:'10px'}} component={Link} to={`/EditUser/${user.id}`}>Edit</Button>
                            <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>DELETE</Button>
                        </TableCell>
                        </TableRow>  
                        
                    ))
                }
            </TableBody>
        </Table>
        </>
    );
};

export default AllUsers;