import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section class="hero">
                <h1>Meet fellow founders and investors AFK</h1>
                <h2>Worldwide community meetups for latinx VC investors and startup founders. Join the movement 👊🔥</h2>
                
                <div class="button-container">
                    <Link href="/">
                        <button class="scroll-btn hero-btn" id="rent-sections"><Icon class="boat-icon boat-animation" icon="mdi:city" />
                            SIGN UP IN YOUR CITY
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}