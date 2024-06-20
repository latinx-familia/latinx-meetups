"use client"

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';
import Link from '@/components/Link';
import NextLink from 'next/link';
import Image from 'next/image';

export default function Header({ }) {
    const [showHeaderWhatsAppLink, setShowHeaderWhatsAppLink] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById('action-join-whtasapp');
        function handleScroll() {
            if (targetElement) {
                const { top, bottom } = targetElement.getBoundingClientRect();
                if (top >= 0 && bottom <= window.innerHeight) {
                    setShowHeaderWhatsAppLink(true);
                } else {
                    setShowHeaderWhatsAppLink(false);
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='sticky top-0 z-50'>
            <Container wide={false} className="bg-yellow-300 h-24">
                <nav className="flex grow justify-between items-center h-full">
                    <ul className="hidden md:flex items-center">
                        <li className="mr-auto">
                            <NextLink href="/" title="Homepage Latinx Tech Group">
                                <Image src="/img/logo.png" alt="Latinx Tech Group Logo" width={96} height={96} className='w-24' />
                            </NextLink>
                        </li>
                        
                    </ul>
                    <ul className="flex grow justify-between md:justify-end items-center">
                        <li className="md:order-1">
                            <NextLink href="/" title="Homepage Latinx Tech Group">
                                <Image src="/img/logo.png" alt="Latinx Tech Group Logo" width={96} height={96} className='w-24 md:hidden' />
                            </NextLink>
                        </li>
                        {!showHeaderWhatsAppLink && (
                            <li className="mt-1.5 pl-0">
                                <Link label="Join the WhatsApp Community" icon="whatsapp" href="https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo" title="Join the Latinx Tech Group WhatsApp Community" isOutline={true} isButton={true} newWindow={true} labelClassName="hidden md:inline-block" />
                            </li>
                        )}
                        {showHeaderWhatsAppLink && (
                            <li className="mt-1.5">
                                <Link label="MAY 28 ON SOCIAL MEDIA" icon="check" href="https://www.linkedin.com/search/results/content/?keywords=latinx&mentionsOrganization=%5B%2288964791%22%5D&origin=FACETED_SEARCH&sid=9N2&sortBy=%22date_posted%22" title="Latinx Meetup May 28, 2024" isButton={true} newWindow={true} labelClassName="hidden md:inline-block" />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

Header.propTypes = {
    wide: PropTypes.bool,
};