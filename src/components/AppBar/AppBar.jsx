import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "shared/hooks/useAuth";
import css from './AppBar.module.css';
import { IconButton, useColorMode } from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa'

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    const { colorMode, toggleColorMode} = useColorMode();

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <IconButton
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                onClick={toggleColorMode}
                isRound="true"
                size="md"
                p={2}
                alignSelf="flex-end" />
        </header>
    );
};