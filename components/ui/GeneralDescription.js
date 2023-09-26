import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Header () {
    return(
        <>
            <section className="general-description" id="stay">
                <h2><p>Latinx Tech Group is a distributed Whatsapp community of VC and Angel investors and Startup Founders all over the world supporting each other to thrive.</p>
                <p>Founded by Latinx founders in Silicon Valley in 2021, we are currently +500 members from 35 cities and want to invite you to join.</p></h2>
                <div class="arrow-down"></div>
                <Link href="https://chat.whatsapp.com/BquU18oQxMu9m7hf8gdX5S" target="_blank">
                    <button class="secondary-btn hero-btn" id="share-boat"><Icon icon="mdi:whatsapp" /> 
                        Join the WhatsApp Community
                    </button>
                </Link>
            </section>
        </>
    );
}