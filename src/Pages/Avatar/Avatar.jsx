import avatarImg from '../../../src/assets/placeholder.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Avatar = () => {
    const { user } = useContext(AuthContext)
    return (
        <img
            className='rounded-full'
            src={user && user?.photoURL ? user?.photoURL : avatarImg}
            alt='profile'
            height='30'
            width='30'
        />
    )
};

export default Avatar;