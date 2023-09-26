import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Header () {
    return(
        <>
            <header>
                <div className="navbar">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <div className="navmenu">
                        <Link href="https://chat.whatsapp.com/BquU18oQxMu9m7hf8gdX5S" target="_blank">
                            <button className="secondary-btn hero-btn" id="share-boat"><Icon icon="mdi:whatsapp" /> 
                                Join the WhatsApp Community
                            </button>
                        </Link>
                    </div>
                </div>        
            </header>
        </>
    );
}