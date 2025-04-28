import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { topNavData } from '../constants/constants';

const Header: React.FC = () => {
    const location = useLocation(); // Get current location object
    const currentPath = location.pathname; // Extract the pathname string

    return (
        <header className="header bg-black py-[10px]">
            <div className="container">
                <ul className="flex space-x-4">
                    {topNavData.map((val, index) => (
                        <li key={index}>
                            <Link
                                className={`font-bold ${
                                    currentPath === val.linkUrl ? 'text-red-500 ' : 'text-white '
                                }`}
                                to={val.linkUrl}
                            >
                                {val.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
