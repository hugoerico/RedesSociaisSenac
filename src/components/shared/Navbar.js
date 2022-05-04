import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext, useReactiveVar } from '../../auth';
import NewPost from '../post/NewPost';
import EditUser from '../user/EditUser';
//import UpdateUser from '../user/updateUser';
//import UpdateUser from '../user/UpdateUser1';
export default function Navbar() {

    const { currentUser } = React.useContext(UserContext);

    const [isNewPost, setIsNewPost] = React.useState(false);
    const [editUser, setIsEditUser] = React.useState(false);
    


    return (
        <nav className='navbar fixed-top navbar-light bg-light'>
            <div className="container">
                <Link to='/' className='navbar-brand'>Senacgram</Link>
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/explorer">Explorar</Link>
                    </li>
                </ul>
            </div>
            {currentUser &&
                <ul className='navbar-nav ms-auto flex-row '>
                    <li className='nav-item mx-2'>
                        <button className='btn' onClick={() => setIsNewPost(!isNewPost)}>New post</button>
                        <NewPost isNewPost={isNewPost} />
                    </li>
                    <li className='nav-item' style={{ cursor: 'pointer' }} onClick={() => setIsEditUser(old => !old)}>
                        {currentUser.name}
                        <EditUser isEditUser={editUser} />
                    </li>
                </ul>
            }
        </nav>);
}