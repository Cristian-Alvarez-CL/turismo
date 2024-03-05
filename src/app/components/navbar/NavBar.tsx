"use client";
// NavBar.tsx
import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import MobileMenuButton from "./MobileMenuButton";
import DarkModeToggle from "./DarkModeToggle";
import menuData from "../../common/data/menuItems.json";
import Image from "next/image";
import imgMapumayCircular from "../../assets/img/mapumay_circular-image.jpeg";
import SubMenu from "./SubMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSubMenuDesktop, setActiveSubMenuDesktop] = useState(null);
  const [activeSubMenuMobile, setActiveSubMenuMobile] = useState(null);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    document.body.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const handleSubMenuMobileClick = (index) => {
    if (activeSubMenuMobile === index) {
      setActiveSubMenuMobile(null);
    } else {
      setActiveSubMenuMobile(index);
    }
  };

  const handleMouseEnterDesktop = (index) => {
    setActiveSubMenuDesktop(index);
  };

  const handleMouseLeaveDesktop = () => {
    setActiveSubMenuDesktop(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <Image src={imgMapumayCircular.src} alt="Logo" width={50} height={50} />
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          <div className="hidden sm:flex justify-center flex-grow">
            {menuData.map((item, idx) => (
              <NavItem key={idx} item={item} isActiveDesktop={activeSubMenuDesktop === idx} onMouseEnter={() => handleMouseEnterDesktop(idx)} onMouseLeave={handleMouseLeaveDesktop} />
            ))}
          </div>
          <DarkModeToggle isActive={isDarkMode} toggle={toggleDarkMode} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuData.map((item, itemIdx) => (
              <div key={itemIdx} className="relative">
                <a
                  href={item.children ? "#" : item.path}
                  onClick={() => item.children && handleSubMenuMobileClick(itemIdx)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-gray-700 dark:text-white"
                >
                  {item.title}
                </a>
                {item.children && activeSubMenuMobile === itemIdx && (
                  <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                    <SubMenu childrenItems={item.children} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
