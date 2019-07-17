import React from 'react'
import {Redirect} from 'react-router-dom';
import {authContext} from '../adalConfig';

export default function Logout() {
    authContext.logOut()
    return (
        <Redirect to="/" />
    )
}
