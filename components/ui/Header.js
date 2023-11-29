import Link from "next/link";
import { Icon } from '@iconify/react';
import { HideBetween, HideOn } from "react-hide-on-scroll";

export default function Header () {
    return(
        <>
            <header>
                <div className="navbar" id="navbar">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <HideOn divID="toggle-navbar">
                        <div className="navmenu">
                            <Link href="https://chat.whatsapp.com/BquU18oQxMu9m7hf8gdX5S" target="_blank">
                                <button className="secondary-btn hero-btn" id="share-boat"><Icon icon="mdi:whatsapp" /> 
                                    Join the WhatsApp Community
                                </button>
                            </Link>
                        </div>
                    </HideOn>
                    <HideBetween div startDivID="navbar" endDivID="toggle-navbar">
                        <div className="navmenu">
                            <Link href="https://app.getriver.io/latinx" target="_blank">
                                <button className="scroll-btn hero-btn"><Icon icon="mdi:city" />
                                    RSVP FOR FEB 27
                                </button>
                            </Link>
                        </div>
                    </HideBetween>
                </div>        
            </header>
        </>
    );
}
