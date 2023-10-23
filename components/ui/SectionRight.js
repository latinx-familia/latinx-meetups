import { Icon } from '@iconify/react';
import Link from "next/link";
import GlideContainer from "./GlideContainer";

export default function SectionRight() {
    return(
        <>
            <div className="section" id="second-section">

                <div className="section-description">
                    <div className="section-description header">
                        <h1>LATINX FOUNDERS AND INVESTORS, SUPPORTING EACH OTHER TO THRIVE</h1>
                        <h2>From aspiring investors to experienced GPs; working at the most established Silicon Valley venture funds, or at non-traditional, or emerging firms.</h2>
                        <p></p>
                        <h3><b>We are the global open source community of Latinx founders and funders</b></h3>
                    </div>
                    <div className="section-description content" id="toggle-navbar">
                        <div className="button-container">
                            <Link href="https://app.getriver.io/latinx-tech-group/events" target="_blank">
                                <button className="secondary-btn hero-btn"><Icon icon="mdi:city" />
                                    SUGGEST A CITY
                                </button>
                            </Link>
                            <Link href="https://forms.gle/1w8h93u1m14iY3YF7" target="_blank">
                                <button className="scroll-btn hero-btn"><Icon icon="mdi:check-outline" />
                                    RSVP FOR NOV 22
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <GlideContainer />
            </div>
        </>
    );
}
