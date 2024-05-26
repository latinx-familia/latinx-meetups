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
                <nav className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex items-center">
                        <li className="mr-auto">
                            <NextLink href="/" title="Homepage Latinx Tech Group">
                                <Image src="/img/logo.png" alt="Latinx Tech Group Logo" width={96} height={96} className='w-24' />
                            </NextLink>
                        </li>
                    </ul>
                    <ul className="flex grow justify-between md:justify-end items-center">
                        {!showHeaderWhatsAppLink && (
                            <li className="mt-1.5 pl-0">
                                <Link label="Join the WhatsApp Community" icon="whatsapp" href="https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo" title="Join the Latinx Tech Group WhatsApp Community" isOutline={true} isButton={true} newWindow={true} labelClassName="hidden md:inline-block" />
                            </li>
                        )}
                        {showHeaderWhatsAppLink && (
                            <li className="mt-1.5">
                                <Link label="RSVP FOR MAY 28" icon="check" href="https://app.getriver.io/latinx" title="Latinx Meetup May 28, 2024 " isButton={true} newWindow={true} labelClassName="hidden md:inline-block" iconClassName="md:hidden" />
                            </li>
                        )}
                        <li className="md:order-1">
                            <NextLink href="/" title="Homepage Latinx Tech Group">
                                <Image src="/img/logo.png" alt="Latinx Tech Group Logo" width={96} height={96} className='w-24 md:hidden' />
                            </NextLink>
                        </li>
                        <li className="md:order-2 mt-1.5">
                            <Link label="Donate" href="https://www.paypal.com/pools/c/948ycdnaf6" icon="heart" isButton={true} newWindow={true} title="Donate to Latinx Tech Group" labelClassName="hidden md:inline-block" iconClassName="md:hidden" />
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

Header.propTypes = {
    wide: PropTypes.bool,
};
