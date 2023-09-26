
import Image from "next/image";
import Head from "next/head";
import { Icon } from '@iconify/react';
import { Inter } from 'next/font/google'
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import Hero from "../components/ui/Hero"
import Glide from "../components/Glide"
import ContactForm from "../components/ui/ContactForm"
import SectionLeft from "../components/ui/SectionLeft"
import SectionRight from "../components/ui/SectionRight"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Book a unique vacation experience with our selection of boats for rent as accommodation in Isla Mujeres, Mexico. Enjoy the beauty of the Caribbean Sea while staying on one of our comfortable and stylish boats. Perfect for a romantic getaway or a fun-filled family vacation. Contact us today to start planning your dream vacation in Isla Mujeres!" />
                
                <title>Latinx Meetups</title>

                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
            </Head>
            <Header />
            <Hero />

            <SectionLeft />
            <SectionRight />
    
            <section className="location-description" id="stay">
                <h2>Welcome</h2>
                <h3>
                    <p>Private boats safely located at marinas to stay in your next vacation.</p>
                    <p>Based in Isla Mujeres, Mexico.</p>
                </h3>
                <h2 className="subtitle-description">Experience living on a boat for a couple of nights</h2>
                <a href="#first-section-couples">
                    <div className="arrow-down"></div>
                </a>
            </section>

            <ContactForm />
            <Footer />
            
        </>
  )
}
