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

export default function Link({ id = null, label, href, style = 'primary', isOutline = false, icon = null, title = '', iconClassName = '', labelClassName = '', isButton = false, newWindow = false }) {
    const baseClass = isButton ? 'flex items-center gap-2 justify-center px-6 py-4 text-sm focus:outline-none rounded-none' : '';
    const styleClass = {
        primary: isButton ? 'primary-button bg-black' : 'text-black hover:text-gray-800',
        secondary: isButton ? 'secondary-button bg-yellow-300 hover:bg-yellow-200' : 'bg-yellow-500 text-yellow-300 hover:text-yellow-500',
    };
    const styleOutlineClass = {
        primary: isOutline ? 'primary-outline bg-transparent border text-black border-black hover:bg-white hover:border-white' : 'border-none text-white',
        secondary: isOutline ? 'secondary-outline bg-transparent border text-yellow-300 border-yellow-300' : 'border-none text-black',
    };

    const className = `${baseClass} ${styleClass[style]} ${styleOutlineClass[style]}`;
    const IconComponent = icon && iconMap[icon];

    return (
        <NextLink 
            id={id}
            href={href}
            className={className}
            role={isButton ? 'button': ''}
            title={title}
            target={newWindow ? '_blank' : '_self'}
            rel={newWindow ? 'noopener noreferrer' : ''}>
                {icon && <span className={iconClassName}><IconComponent size="1.2rem" /></span>}
                <span className={labelClassName}>{label}</span>
        </NextLink>
    );
}

Link.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['primary', 'secondary']),
    isOutline: PropTypes.bool,
    icon: PropTypes.oneOf(['arrowLeft', 'arrowRight', 'whatsapp', 'check', 'heart']),
    isButton: PropTypes.bool,
    newWindow: PropTypes.bool,
    iconClassName: PropTypes.string,
    labelClassName: PropTypes.string,
};
