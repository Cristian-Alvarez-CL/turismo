"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import menuData from "../common/data/menuItems.json";
import SubMenu from "./navbar/SubMenu";
import Image from "next/image";
import imgMapumayCircular from "../assets/img/mapumay_circular.jpeg";

export default function Menu() {
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

  const handleSubMenuMobileClick = (index : any) => {
    if (activeSubMenuMobile === index) {
      setActiveSubMenuMobile(null); 
    } else {
      setActiveSubMenuMobile(index); 
    }
  };

  const handleMouseEnterDesktop = (index : any) => {
    setActiveSubMenuDesktop(index);
  };

  const handleMouseLeaveDesktop = () => {
    setActiveSubMenuDesktop(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image 
                src={imgMapumayCircular.src} 
                alt="Logo" 
                width={50} 
                height={50} 
            />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none dark:text-white">
            <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            {isMenuOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
          </button>

          <div className="hidden sm:flex justify-center flex-grow">
            <div className="flex space-x-4">
              {menuData.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnterDesktop(itemIdx)}
                  onMouseLeave={handleMouseLeaveDesktop}
                >
                  <a href={item.path} className="text-black hover:bg-gray-700 hover:text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {item.title}
                  </a>
                  {item.children && activeSubMenuDesktop === itemIdx && (
                    <div className="absolute left-0 mt-1 bg-white dark:bg-black shadow-lg rounded-md">
                      <SubMenu childrenItems={item.children} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button onClick={toggleDarkMode} className="p-2">
            {isDarkMode ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-black" />}
          </button>
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
                  <div className="bg-white dark:bg-black shadow-lg rounded-md">
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
