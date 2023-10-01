import React, { useLayoutEffect } from "react";
import Glide from '@glidejs/glide';
import Image from "next/legacy/image"

export default function GlideContainer() {
    useLayoutEffect(() => {
       let sliders = document.querySelectorAll('.glide');
    for (let i = 0; i < sliders.length; i++) {
        let glide = new Glide(sliders[i], {
            startAt: 0,
            autoplay: 2800,
            hoverpause: true,
        });
        glide.mount();
    }

    })

    return(
        <>
            <div className="glide-container">
                <div className="glide">
                    <div data-glide-el="controls" >
                        <button data-glide-dir="<" className="glide__arrow glide__arrow--left">{'<'}</button>
                        <button data-glide-dir=">" className="glide__arrow glide__arrow--right">{'>'}</button>
                    </div>
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/9.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/10.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/11.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/12.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/13.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/14.jpg" alt="Latinx Meetup" /></li>
                            <li className="glide__slide"><Image layout="fill" objectFit="cover" src="/img/PastEvents/15.jpg" alt="Latinx Meetup" /></li>
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
                        <button className="glide__bullet" data-glide-dir="=7"></button>
                    </div>
                </div>
            </div>
        </>)}