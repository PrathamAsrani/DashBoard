import React from 'react';
import logo from '../images/logo.png';
import { FaSuitcase } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiNotification3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    const activePage = "jobs"; // This would typically come from props or state

    return (
        <div className='header-container'>
            <div className="header-left">
                <img src={logo} alt="Logo" className='header-logo' loading='lazy' />
            </div>
            <div className="header-middle">
                <ul className='header-list'>
                    <li className={activePage === "jobs" ? "active" : ""}><FaSuitcase /> Jobs</li>
                    <li className={activePage === "messages" ? "" : ""}><LuMessageSquare /> Messages</li>
                    <li className={activePage === "payments" ? "" : ""}><FaHandHoldingUsd /> Payments</li>
                </ul>
            </div>
            <div className="header-right">
                <RiNotification3Line />
                <FaRegUser />
                <IoIosArrowDown />
            </div>
        </div>
    );
}

export default Header;
