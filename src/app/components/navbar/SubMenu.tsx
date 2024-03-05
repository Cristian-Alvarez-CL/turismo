import React from 'react';

const SubMenu = ({ childrenItems }) => {
    return (
        <div className="absolute left-0 mt-1 bg-white dark:bg-black shadow-lg rounded-md">
            {childrenItems.map((child, index) => (
                <a key={index} href={child.path} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    {child.title}
                </a>
            ))}
        </div>
    );
};

export default SubMenu;
  