import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];
    //const attachedClasses = props.open ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close];
    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );

}

export default sideDrawer;