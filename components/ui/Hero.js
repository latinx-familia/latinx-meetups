import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section className="hero">
                <h1>Meet fellow founders and investors AFK</h1>
                <h2>Worldwide community meetups for latinx VC investors and startup founders. Join the movement 👊🔥</h2>
                
                <div className="button-container">
                    <Link href="https://forms.gle/1w8h93u1m14iY3YF7" target="_blank">
                        <button className="secondary-btn hero-btn"><Icon icon="mdi:city" />
                            SUGGEST A CITY
                        </button>
                    </Link>
                    <Link href="https://app.getriver.io/latinx-tech-group/events" target="_blank">
                        <button className="scroll-btn hero-btn"><Icon icon="mdi:check-outline" />
                            RSVP FOR NOV 22
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
