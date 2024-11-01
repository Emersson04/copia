// src/components/atoms/NavbarItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

const NavbarItem = ({ icon, label, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div onClick={handleClick} className="flex items-center p-2 hover:bg-blue-700 cursor-pointer">
            <Icon icon={icon} />
            <span className="ml-4">{label}</span>
        </div>
    );
};

export default NavbarItem;
