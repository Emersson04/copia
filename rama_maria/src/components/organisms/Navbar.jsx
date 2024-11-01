// src/components/organisms/Navbar.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../atoms/Logo';
import NavbarItem from '../atoms/NavbarItem';
import UserOptions from '../molecules/UserOptions';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-between items-center z-20 sticky top-0 px-4 py-1 bg-slate-300 text-black">
            <Logo />
            <div className="flex space-x-4">
                <NavbarItem icon="Home" label="Home" path="/" />
                <NavbarItem icon="Dashboard" label="Dashboard" path="/dashboard" />
                <NavbarItem icon="Settings" label="Settings" path="/settings" />
                
            </div>
            <div className="flex items-center space-x-4 w-44">
                {user ? (
                    <>
                        <UserOptions/>
                    </>
                ) : (
                    <NavbarItem icon="LogIn" label="Login" path="/login" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
