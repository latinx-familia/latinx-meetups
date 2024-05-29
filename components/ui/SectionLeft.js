import { Icon } from '@iconify/react';
import Link from "next/link";
import Image from "next/legacy/image"


export default function SectionLeft() {
    return(
        <>
            <div className="section" id="first-section">
                <div className="glide-container">
                    <div className="glide">
                        <div data-glide-el="controls" >
                            <button data-glide-dir="<" className="glide__arrow glide__arrow--left">{'<'}</button>
                            <button data-glide-dir=">" className="glide__arrow glide__arrow--right">{'>'}</button>
                        </div>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/1.jpg" alt="Latinx Meetup" /></li>
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/2.jpg" alt="Latinx Meetup" /></li>
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/4.jpg" alt="Latinx Meetup" /></li>
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/5.jpg" alt="Latinx Meetup" /></li>
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/6.jpg" alt="Latinx Meetup" /></li>
                                <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/8.jpg" alt="Latinx Meetup" /></li>
                            </ul>
                        </div>

                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                            <button className="glide__bullet" data-glide-dir="=3"></button>
                            <button className="glide__bullet" data-glide-dir="=4"></button>
                            <button className="glide__bullet" data-glide-dir="=5"></button>
                            <button className="glide__bullet" data-glide-dir="=6"></button>

                        </div>
                    </div>
                </div>

                <div className="section-description">
                    <div className="section-description header">
                        <h1>FROM SEED TO IPO, TOGETHER WE ARE #STRONG</h1>
                        <h2>Founders from our community already raised over $400M in venture capital in aggregate.</h2>
                        <p>The magic of attending a Latinx meetup is that people come together to listen, connect, and grow. No one wants to impress anyone. Not needing to pitch is the ultimate flex.
                        </p>
                        <h3><b>Latinx founders supporting each other to thrive.</b></h3>
                    </div>
                    <div className="section-description content">
                        <div className="button-container">
                            <Link href="https://forms.gle/S6GjZFbeLUUGkBJu5" target="_blank">
                                <button className="secondary-btn hero-btn" id="goto-sponsor-form"><Icon icon="material-symbols-light:handshake" />
                                    BE A SPONSOR
                                </button>
                            </Link>
                            <Link href="https://www.linkedin.com/search/results/content/?keywords=latinx&mentionsOrganization=%5B%2288964791%22%5D&origin=FACETED_SEARCH&sid=9N2&sortBy=%22date_posted%22" target="_blank">
                                <button className="scroll-btn hero-btn" id="goto-rsvp"><Icon icon="mdi:check-outline" />
                                    MAY 28 IN SOCIAL MEDIA
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
