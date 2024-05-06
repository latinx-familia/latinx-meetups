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
                    <div className="navmenu">
                        <HideOn divID="toggle-navbar">
                            <Link href="https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo" target="_blank">
                                <button className="secondary-btn hero-btn" id="share-boat"><Icon icon="mdi:whatsapp" /> 
                                Join the WhatsApp Community
                                </button>
                            </Link>
                        </HideOn>
                        <HideBetween div startDivID="navbar" endDivID="toggle-navbar">
                            <Link href="https://app.getriver.io/latinx" target="_blank">
                                <button className="scroll-btn hero-btn"><Icon icon="mdi:check-outline" />
                                    RSVP FOR MAY 28
                                </button>
                            </Link>
                        </HideBetween>
                        <Link href="https://www.paypal.com/pools/c/948ycdnaf6" target="_blank">
                            <button className="donate-btn">
                                DONATE
                            </button>
                        </Link>
                    </div>
                </div>        
            </header>
        </>
    );
}
