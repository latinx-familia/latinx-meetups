import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight, BsWhatsapp, BsCheckLg, BsHeartFill } from 'react-icons/bs'; // Example of using react-icons library

const iconMap = {
    arrowLeft: BsArrowLeft,
    arrowRight: BsArrowRight,
    whatsapp: BsWhatsapp,
    check: BsCheckLg,
    heart: BsHeartFill
};

export default function Link({ label, href, style = 'primary', isOutline = false, icon = null, title = '', isButton = false, newWindow = false }) {
    const baseClass = isButton ? 'inline-flex items-center justify-center px-6 py-4 text-sm focus:outline-none rounded-none' : '';
    const styleClass = {
        primary: isButton ? 'bg-black hover:bg-slate-800' : 'text-black hover:text-gray-800',
        secondary: isButton ? 'bg-yellow-300  hover:bg-yellow-200' : 'bg-yellow-500 text-yellow-300 hover:text-yellow-500',
    };
    const styleOutlineClass = {
        primary: isOutline ? 'bg-transparent border text-black border-black hover:bg-transparent' : 'border-none text-white',
        secondary: isOutline ? 'bg-transparent border text-yellow-300 border-yellow-300' : 'border-none text-black',
    };

    const className = `${baseClass} ${styleClass[style]} ${styleOutlineClass[style]}`;
    const IconComponent = icon && iconMap[icon];

    return (
        <NextLink 
            href={href}
            className={className}
            role={isButton ? 'button': ''}
            title={title}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noopener noreferrer' : ''}>
                {icon && <span className="mr-2"><IconComponent size="1.2rem" /></span>}
                {label}
        </NextLink>
    );
}

Link.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['primary', 'secondary']),
    isOutline: PropTypes.bool,
    icon: PropTypes.oneOf(['arrowLeft', 'arrowRight', 'whatsapp', 'check', 'heart']),
    isButton: PropTypes.bool,
    newWindow: PropTypes.bool,
};
