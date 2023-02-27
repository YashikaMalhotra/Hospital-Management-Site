import React from 'react'
import {NavLink} from 'react-router-dom';
import '../Assets/Styles/PageNotFound.scss';

const PageNotFound=() => {
    return (
        <div className='nopage_container'>
            <p> OOPS! 🙁
            </p>
            <h3>404 - PAGE CAN'T BE FOUND</h3>
            <br />
            <NavLink to="/" className='gotoHome'>Go to Homepage</NavLink>
        </div>
    )
}

export default PageNotFound;