// DarkModeToggle.tsx
import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkModeToggle = ({ isActive, toggle }) => {
    return (
        <button onClick={toggle} className="p-2">
            {isActive ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-black" />}
        </button>
    );
};

export default DarkModeToggle;
