import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section className="hero">
                <h1>Meet fellow founders and investors AFK</h1>
                <h2>Worldwide community meetups for latinx VC investors and startup founders. Join the movement 👊🔥</h2>
                
                <div className="button-container">
                    <Link href="/">
                        <button className="scroll-btn hero-btn"><Icon icon="mdi:city" />
                            SIGN UP IN YOUR CITY
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}