// NavItem.tsx
import React from 'react';
import SubMenu from '@/components/navbar/SubMenu';

const NavItem = ({ item, isActiveDesktop, isActiveMobile, onMouseEnter, onMouseLeave, onMobileClick }) => {
    return (
        <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a 
                href={item.children ? "#" : item.path} 
                onClick={item.children ? onMobileClick : null}
                className="text-black hover:bg-gray-700 hover:text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                {item.title}
            </a>
            {item.children && (isActiveDesktop || isActiveMobile) && (
                <SubMenu childrenItems={item.children} />
            )}
        </div>
    );
};

export default NavItem;
