import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Hero () {
    return(
       <>
        <section className="hero">
                <h1>Gracias por la Magia de Latinx ❤️</h1>
                <h2>On May 28, 2024, we celebrated the Latinx Tech Community worldwide for the third time. Thank you to you all for making it happen. Let&apos;s see you again on August, 27th.</h2>
                <div className="button-container">
                    <Link href="https://forms.gle/S6GjZFbeLUUGkBJu5" target="_blank">
                        <button className="secondary-btn hero-btn" id="goto-sponsor-form"><Icon icon="material-symbols-light:handshake" />
                            BE A SUPPORTER
                        </button>
                    </Link>
                    <Link href="https://www.linkedin.com/search/results/content/?keywords=latinx&mentionsOrganization=%5B%2288964791%22%5D&origin=FACETED_SEARCH&sid=9N2&sortBy=%22date_posted%22" target="_blank">
                        <button className="scroll-btn hero-btn" id="goto-rsvp"><Icon icon="mdi:check-outline" />
                            MAY 28 IN SOCIAL MEDIA
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
