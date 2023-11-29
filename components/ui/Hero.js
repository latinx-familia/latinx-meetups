import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section className="hero">
                <h1>Let&apos;s come together to connect ❤️🫶</h1>
                <h2>We&apos;re hosting get-togethers all over the world to celebrate the Latinx Tech Community 🌍🚀💫 </h2>
                
                <div className="button-container">
                    <Link href="https://forms.gle/S6GjZFbeLUUGkBJu5" target="_blank">
                        <button className="secondary-btn hero-btn"><Icon icon="material-symbols-light:handshake" />
                            BE AN ALLY
                        </button>
                    </Link>
                    <Link href="https://app.getriver.io/latinx" target="_blank">
                        <button className="scroll-btn hero-btn"><Icon icon="mdi:check-outline" />
                            RSVP FOR FEB 27
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
