import React from 'react';
import logo from '../images/logo.png';
import { FaSuitcase } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiNotification3Line } from "react-icons/ri";
import UserLogo from '../images/UserLogo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-left">
                <img src={logo} alt="Logo" className='header-logo' loading='lazy' />
            </div>
            <div className="header-middle">
                <ul className='header-list'>
                    <li><FaSuitcase /> Jobs</li>
                    <li><LuMessageSquare /> Messages</li>
                    <li><FaHandHoldingUsd /> Payments</li>
                </ul>
            </div>
            <div className="header-right">
                <RiNotification3Line />
                <img src={UserLogo} alt="User" className='user-logo' loading='lazy'/>
                <IoIosArrowDown />
            </div>
        </div>
    );
}

export default Header;
