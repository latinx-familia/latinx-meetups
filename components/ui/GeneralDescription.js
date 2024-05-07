import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Header () {
    return(
        <>
            <section className="general-description" id="stay">
                <h2><p>Latinx Tech Group is a community of VC and Angel investors and Startup Founders all over the world supporting each other to thrive.</p>
                <p>Founded by Latinx founders in Silicon Valley in 2021, we are currently +1,700 members from 100 cities in 30 countries and want to invite you to join.</p></h2>
                <div className="arrow-down"></div>
                <Link href="https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo" target="_blank">
                    <button className="secondary-btn hero-btn" id="goto-whatsapp"><Icon icon="mdi:whatsapp" /> 
                        Join the WhatsApp Community
                    </button>
                </Link>
            </section>
        </>
    );
}
