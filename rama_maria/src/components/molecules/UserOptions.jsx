import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Icon from '../atoms/Icon';

const UserOptions = () => {
    const { user, logout } = useAuth();

    return (
        <div className="flex items-center p-2">
            {user && (
                <>
                    <span className="mr-4 text-black">{user.nombre}</span>
                    <Icon icon="User" />
                    <button onClick={logout} className="ml-4 hover:bg-red-700 p-2 rounded">
                        <Icon icon="LogOut" />
                    </button>
                </>
            )}
        </div>
    );
};

export default UserOptions;
