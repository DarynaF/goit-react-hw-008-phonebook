import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';
import { logOut } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <Button type='button' onClick={handleLogOut}  colorScheme="orange" px="4" marginLeft='auto' >Logout</Button>
        </div>
    );
};
