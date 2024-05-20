import React from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';
import Link from '@/components/Link';
import NextLink from 'next/link';
import Image from 'next/image'

export default function Header({ }) {

    return (
        <header className='sticky top-0 z-50'>
            <Container wide={false} className="bg-yellow-300 h-24">
                <nav>
                    <ul className="h-24">
                        <li>
                            <NextLink href="/" title="Homepage Latinx Tech Group">
                                <Image src="/img/logo.png" alt="Latinx Tech Group Logo" width={96} height={96} className='w-24' />
                            </NextLink>
                        </li>
                    </ul>

                    <ul className="h-24">
                        <li>
                            <Link label="Join the WhatsApp Community" icon="whatsapp" href="https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo" title="Join the Latinx Tech Group WhatsApp Community" isOutline={true} isButton={true} />
                        </li>
                        <li>
                            <Link label="DONATE" href="https://www.paypal.com/pools/c/948ycdnaf6" isButton={true} title="Donate Latinx Tech Group" />
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