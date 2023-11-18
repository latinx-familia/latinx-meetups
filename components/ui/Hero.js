import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section className="hero">
                <h1>Let&apos;s come together to celebrate 🎂🥳</h1>
                <h2>We&apos;re hosting get-togethers all over the world to celebrate the second birthday of the Latinx Tech WhatsApp Community 🌍🚀💫</h2>
                
                <div className="button-container">
                    <Link href="https://forms.gle/1w8h93u1m14iY3YF7" target="_blank">
                        <button className="secondary-btn hero-btn"><Icon icon="mdi:city" />
                            SUGGEST A CITY
                        </button>
                    </Link>
                    <Link href="https://app.getriver.io/latinx" target="_blank">
                        <button className="scroll-btn hero-btn"><Icon icon="mdi:check-outline" />
                            RSVP FOR NOV 28
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
