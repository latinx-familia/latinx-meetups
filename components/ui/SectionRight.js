import { Icon } from '@iconify/react';
import Link from "next/link";

export default function SectionRight() {
    return(
        <>
            <div className="section" id="second-section">

                <div className="section-description">
                    <div className="section-description header">
                        <h1>LATINX INVESTORS, SUPPORTING EACH OTHER TO THRIVE</h1>
                        <h2>From aspiring investors to experienced GPs; working at the most established Silicon Valley venture funds, and at non-traditional, emerging firms.</h2>
                        <p></p>
                        <h3><b>We are the global open source community of Latine Investors</b></h3>
                    </div>
                    <div className="section-description content">
                        <div class="button-container">
                            <Link href="/">
                                <button class="scroll-btn hero-btn" id="rent-sections"><Icon class="boat-icon boat-animation" icon="mdi:city" />
                                    SIGN UP IN YOUR CITY
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="glide-container">
                    <div className="glide">
                        <div data-glide-el="controls" >
                            <button data-glide-dir="<" className="glide__arrow glide__arrow--left">{'<'}</button>
                            <button data-glide-dir=">" className="glide__arrow glide__arrow--right">{'>'}</button>
                        </div>
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">

                                <li className="glide__slide"><img src="img/PastEvents/5.jpg" />1</li>
                                <li className="glide__slide"><img src="img/PastEvents/6.jpg" />1</li>
                                <li className="glide__slide"><img src="img/PastEvents/7.jpg" />1</li>
                                <li className="glide__slide"><img src="img/PastEvents/8.jpg" />1</li>
                                
                            </ul>
                        </div>

                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                            <button className="glide__bullet" data-glide-dir="=3"></button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}