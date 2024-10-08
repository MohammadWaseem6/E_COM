'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Constants_1 = require("@/Constants");
//icons
var ai_1 = require("react-icons/ai");
var fi_1 = require("react-icons/fi");
var md_1 = require("react-icons/md");
var io5_1 = require("react-icons/io5");
var Navbar = function () {
    var _a = react_1.useState(false), openMobileMenu = _a[0], setOpenMobileMenu = _a[1];
    var _b = react_1.useState(false), openUserMenu = _b[0], setOpenUserMenu = _b[1];
    var _c = react_1.useState(false), user = _c[0], setUser = _c[1];
    var mobileMenuHandler = function () {
        setOpenMobileMenu(!openMobileMenu);
    };
    var userMenuHandler = function () {
        setOpenUserMenu(!openUserMenu);
    };
    return (React.createElement("nav", null,
        React.createElement("div", { className: 'main-container border-b border-1 flex justify-between items-center py-2 px-8 relative bg-[#FCFAEE]' },
            React.createElement(link_1["default"], { href: '/' },
                React.createElement("div", { className: 'flex gap-1 items-center text-xl font-medium text-black' },
                    React.createElement("h1", null, "AL-BAKARAH STORE"),
                    React.createElement(io5_1.IoShirtOutline, null))),
            React.createElement("ul", { className: 'flex gap-10 max-md:hidden' }, Constants_1.mainLinks.map(function (link) { return (React.createElement(link_1["default"], { href: link.route },
                React.createElement("li", null,
                    " ",
                    link.label))); })),
            React.createElement("div", { className: 'flex gap-5 text-xl [&>*]:cursor-pointer' },
                React.createElement(ai_1.AiOutlineShoppingCart, null),
                React.createElement(ai_1.AiOutlineHeart, null),
                React.createElement("div", { className: 'max-md:hidden', onClick: userMenuHandler },
                    React.createElement(ai_1.AiOutlineUser, null)),
                React.createElement("div", { className: 'md:hidden' }, openMobileMenu ? React.createElement(md_1.MdClose, null) : React.createElement(fi_1.FiMenu, null))),
            openUserMenu && (React.createElement("div", { className: "z-10 absolute right-0 top-[40px] w-28 bg-gray-700 shadow-md rounded-md p-4 text-white max-md:hidden text-center" })))));
};
exports["default"] = Navbar;
