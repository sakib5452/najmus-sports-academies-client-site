import avatarImg from '../../../src/assets/placeholder.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Avatar = () => {
    const { user } = useContext(AuthContext)
    return (
        <img
            className='rounded-full mt-1'
            src={user && user?.photoURL ? user?.photoURL : avatarImg}
            alt='profile'
            height='50'
            width='50'
        />
    )
};

export default Avatar;