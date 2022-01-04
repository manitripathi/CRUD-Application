import React from "react";
import { AppBar, Toolbar,makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle=makeStyles({
    header:{
        background:'black',
    },
    tabs:{
        color:'white',
        textDecoration:'none',
        marginRight:'20px'
    }
})

const Navbar = () => {
    const classes=useStyle();
  return (
    <AppBar className={classes.header} position='static'>
      <Toolbar>
        <NavLink to ='/' className={classes.tabs}>Home</NavLink>
        <NavLink to ='/AllUsers' className={classes.tabs}>All Users</NavLink>
        {/* <NavLink to ='/AddUser' className={classes.tabs}>Add Users</NavLink> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
