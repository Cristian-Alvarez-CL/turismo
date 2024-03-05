// MobileMenuButton.tsx
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => {
    return (
        <button onClick={toggleMenu} className="sm:hidden p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none dark:text-white">
            {isMenuOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
        </button>
    );
};

export default MobileMenuButton;
